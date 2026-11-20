"use client";

import type { Line2 } from "three-stdlib";

import { Environment, Lightformer, Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import { HEXAGRAMS, hexagramBinary } from "@/lib/iching/canonical";
import { fuxiAngle, matchesPrefix } from "@/lib/iching/fuxi";

// World units. The camera frames a radius of ~4.8, so the ring fills the stage
// and its inner circle (~70% of the stage) leaves room for the centre overlay.
const BOTTOM_RADIUS = 3.45;
const LINE_STEP = 0.17;
const BAR_LENGTH = 0.26;
const YIN_HALF = 0.11;
const BAR_THICKNESS = 0.1;
const BAR_DEPTH = 0.12;
const SCALE_INNER = BOTTOM_RADIUS - 0.22;
const SCALE_OUTER = BOTTOM_RADIUS + 5 * LINE_STEP + 0.2;
const TILT = -0.16;

const COLORS = {
  dim: new THREE.Color("#30504A"),
  celadon: new THREE.Color("#8FB9A8"),
  mist: new THREE.Color("#D9E2DE"),
  brass: new THREE.Color("#C9A55C"),
  crackle: new THREE.Color("#3E5E55"),
};

export type RingState = {
  /** Lines cast so far as a binary prefix, bottom → top ("" before the first toss). */
  prefix: string;
  /** Moving line positions (1..6) among the cast lines. */
  movingLines: number[];
  /** Hexagram the moving lines change into; set once all six lines are cast. */
  resultBinary?: string;
  reducedMotion?: boolean;
};

type Bar = { binary: string; line: number; matrix: THREE.Matrix4 };

function buildBars(): Bar[] {
  const bars: Bar[] = [];
  const quaternion = new THREE.Quaternion();
  const scale = new THREE.Vector3();
  const position = new THREE.Vector3();

  for (const hexagram of HEXAGRAMS) {
    const binary = hexagramBinary(hexagram);
    const angle = fuxiAngle(binary);
    const tangent = new THREE.Vector2(Math.cos(angle), Math.sin(angle));

    quaternion.setFromEuler(new THREE.Euler(0, 0, angle));

    // Bottom line nearest the centre, as in the classical circular diagrams
    for (let line = 0; line < 6; line++) {
      const radius = BOTTOM_RADIUS + line * LINE_STEP;
      const cx = -radius * Math.sin(angle);
      const cy = radius * Math.cos(angle);
      const segments =
        binary[line] === "1"
          ? [{ offset: 0, length: BAR_LENGTH }]
          : [
              { offset: -(BAR_LENGTH - YIN_HALF) / 2, length: YIN_HALF },
              { offset: (BAR_LENGTH - YIN_HALF) / 2, length: YIN_HALF },
            ];

      for (const { offset, length } of segments) {
        position.set(cx + tangent.x * offset, cy + tangent.y * offset, 0);
        scale.set(length, BAR_THICKNESS, BAR_DEPTH);
        bars.push({
          binary,
          line,
          matrix: new THREE.Matrix4().compose(position, quaternion, scale),
        });
      }
    }
  }

  return bars;
}

function targetColor(bar: Bar, state: RingState): THREE.Color {
  const { prefix, movingLines, resultBinary } = state;
  const complete = prefix.length === 6;

  if (complete && resultBinary && resultBinary !== prefix) {
    if (bar.binary === resultBinary) return COLORS.brass;
  }
  if (!matchesPrefix(bar.binary, prefix)) return COLORS.dim;
  if (complete) {
    return movingLines.includes(bar.line + 1) ? COLORS.brass : COLORS.mist;
  }

  // Still casting: the lines already cast are shared by every candidate
  return bar.line < prefix.length ? COLORS.mist : COLORS.celadon;
}

/** Rotation that brings the remaining candidates (or the cast hexagram) to the top. */
function targetRotation(prefix: string): number {
  if (!prefix) return 0;
  const angles = HEXAGRAMS.map(hexagramBinary)
    .filter((b) => matchesPrefix(b, prefix))
    .map(fuxiAngle);

  // Candidates always form one contiguous arc on one half, so the mean is safe
  return -angles.reduce((sum, a) => sum + a, 0) / angles.length;
}

function pointOnRing(angle: number, radius: number) {
  return new THREE.Vector3(
    -radius * Math.sin(angle),
    radius * Math.cos(angle),
    0,
  );
}

/** Brass arc from the cast hexagram to the one it changes into. */
function ChangeArc({
  from,
  to,
  start,
  reducedMotion,
}: {
  from: string;
  to: string;
  /** Becomes true once the ring has settled; the arc draws from then on. */
  start: React.RefObject<boolean>;
  reducedMotion?: boolean;
}) {
  const ref = useRef<Line2>(null);
  const progress = useRef(0);
  const points = useMemo(() => {
    const radius = SCALE_INNER - 0.12;
    const start = pointOnRing(fuxiAngle(from), radius);
    const end = pointOnRing(fuxiAngle(to), radius);
    const control = start.clone().add(end).multiplyScalar(0.18);

    return new THREE.QuadraticBezierCurve3(start, control, end).getPoints(96);
  }, [from, to]);

  useLayoutEffect(() => {
    progress.current = 0;
    if (ref.current) ref.current.geometry.instanceCount = 0;
  }, [points]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const target = start.current ? 1 : 0;

    progress.current = reducedMotion
      ? target
      : THREE.MathUtils.damp(progress.current, target, 2.2, delta);
    ref.current.geometry.instanceCount = Math.round(
      progress.current * (points.length - 1),
    );
  });

  return <Line ref={ref} color={COLORS.brass} lineWidth={2} points={points} />;
}

function EngravedScale() {
  const ticks = useMemo(() => {
    const matrices: THREE.Matrix4[] = [];
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3(0.012, 0.1, 0.01);

    // A tick between every pair of neighbouring hexagrams, inside and outside
    for (let k = 0; k < 64; k++) {
      const angle = (k * Math.PI) / 32;

      quaternion.setFromEuler(new THREE.Euler(0, 0, angle));
      for (const radius of [SCALE_INNER + 0.05, SCALE_OUTER - 0.05]) {
        matrices.push(
          new THREE.Matrix4().compose(
            pointOnRing(angle, radius),
            quaternion,
            scale,
          ),
        );
      }
    }

    return matrices;
  }, []);
  const tickRef = useRef<THREE.InstancedMesh>(null);

  useLayoutEffect(() => {
    ticks.forEach((m, i) => tickRef.current?.setMatrixAt(i, m));
    if (tickRef.current) tickRef.current.instanceMatrix.needsUpdate = true;
  }, [ticks]);

  return (
    <group>
      {[SCALE_INNER, SCALE_OUTER].map((radius) => (
        <mesh key={radius}>
          <ringGeometry args={[radius - 0.008, radius + 0.008, 256]} />
          <meshBasicMaterial color={COLORS.crackle} />
        </mesh>
      ))}
      <instancedMesh ref={tickRef} args={[undefined, undefined, ticks.length]}>
        <boxGeometry />
        <meshBasicMaterial color={COLORS.crackle} />
      </instancedMesh>
    </group>
  );
}

function Ring(state: RingState) {
  const bars = useMemo(buildBars, []);
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const current = useRef<THREE.Color[]>([]);
  const targets = useMemo(
    () => bars.map((bar) => targetColor(bar, state)),
    [bars, state.prefix, state.movingLines, state.resultBinary],
  );
  const rotation = targetRotation(state.prefix);
  const complete = state.prefix.length === 6;
  const hasChange =
    complete && !!state.resultBinary && state.resultBinary !== state.prefix;
  const settled = useRef(false);

  useLayoutEffect(() => {
    const mesh = meshRef.current;

    if (!mesh) return;
    bars.forEach((bar, i) => mesh.setMatrixAt(i, bar.matrix));
    mesh.instanceMatrix.needsUpdate = true;
    current.current = bars.map(() => COLORS.celadon.clone());
    current.current.forEach((c, i) => mesh.setColorAt(i, c));
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [bars]);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    const group = groupRef.current;

    if (!mesh || !group) return;
    const t = state.reducedMotion ? 1 : 1 - Math.exp(-5 * delta);

    current.current.forEach((color, i) => {
      color.lerp(targets[i], t);
      mesh.setColorAt(i, color);
    });
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;

    group.rotation.z = state.reducedMotion
      ? rotation
      : THREE.MathUtils.damp(group.rotation.z, rotation, 2.4, delta);
    // The arc starts drawing once the cast hexagram has arrived at the top
    settled.current = Math.abs(group.rotation.z - rotation) < 0.01;
  });

  return (
    <group rotation={[TILT, 0, 0]}>
      <EngravedScale />
      {/* Fixed index: where the cast hexagram comes to rest */}
      <mesh position={[0, SCALE_OUTER + 0.16, 0]} rotation={[0, 0, Math.PI]}>
        <circleGeometry args={[0.09, 3]} />
        <meshBasicMaterial color={COLORS.mist} />
      </mesh>
      <group ref={groupRef}>
        <instancedMesh ref={meshRef} args={[undefined, undefined, bars.length]}>
          <boxGeometry />
          <meshStandardMaterial metalness={0.35} roughness={0.42} />
        </instancedMesh>
        {hasChange && (
          <ChangeArc
            from={state.prefix}
            reducedMotion={state.reducedMotion}
            start={settled}
            to={state.resultBinary!}
          />
        )}
      </group>
    </group>
  );
}

export function RingOfChanges(props: RingState) {
  return (
    <Canvas
      aria-hidden
      camera={{ fov: 30, position: [0, 0, 18] }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight intensity={1.4} position={[-4, 6, 8]} />
      <Environment resolution={64}>
        <Lightformer intensity={1.2} position={[0, 5, 6]} scale={[10, 2, 1]} />
        <Lightformer intensity={0.6} position={[-6, -2, 4]} scale={[4, 4, 1]} />
      </Environment>
      <Ring {...props} />
    </Canvas>
  );
}
