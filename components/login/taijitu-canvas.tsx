"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { GLSL_PALETTE, TAIJITU_GLSL } from "./taijitu-glsl";

/** What the page asks of the taijitu; the canvas eases toward these every frame. */
export type TaijituTargets = {
  scale: number; // 1 = resting size
  spin: number; // radians per second
  glow: number; // 0..1
};

// The disc fills 1 / MARGIN of the canvas, leaving room for its glow
const MARGIN = 1.4;

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform float uRotation;
  uniform float uScale;
  uniform float uGlow;
  varying vec2 vUv;
  ${GLSL_PALETTE}
  ${TAIJITU_GLSL}

  void main() {
    vec2 p = (vUv - 0.5) * 2.0 * ${MARGIN.toFixed(2)} / uScale;
    float c = cos(uRotation), s = sin(uRotation);
    vec2 q = mat2(c, -s, s, c) * p;
    float aa = fwidth(q.x) * 1.25;
    vec4 t = taijitu(q, aa);
    float r = length(p);

    // Silk catches the light toward the centre; lacquer keeps a faint sheen
    vec3 yang = mix(SILK, SILK_LIGHT, smoothstep(1.0, 0.0, r) * 0.6);
    vec3 yin = LACQUER + vec3(0.05, 0.04, 0.03) * smoothstep(1.0, 0.2, length(p - vec2(-0.35, 0.35)));
    // A faint woven grain, and slow mist moving across the surface
    float grain = (hash21(floor(vUv * 1400.0)) - 0.5) * 0.035;
    float mist = fbm21(q * 2.5 + vec2(uTime * 0.03, 0.0)) * 0.06;
    vec3 colour = mix(yin, yang, t.x) + grain + mist * mix(0.5, -0.4, t.x);
    colour = mix(colour, HUANG, t.z * 0.9);

    float disc = max(t.y, t.z);
    // The glow must fade out before the canvas edge, or its square shows
    float halo = t.w * (0.16 + 0.4 * uGlow) * smoothstep(1.38, 1.05, length(vUv - 0.5) * 2.0 * 1.4);
    gl_FragColor = vec4(mix(HUANG, colour, disc), max(disc, halo));
  }
`;

function Disc({
  targets,
  reducedMotion,
}: {
  targets: React.RefObject<TaijituTargets>;
  reducedMotion: boolean;
}) {
  const viewport = useThree((s) => s.viewport);
  const material = useRef<THREE.ShaderMaterial>(null);
  const state = useRef({ rotation: 0, scale: 1, glow: 0, time: 0 });
  // Initial values only: R3F copies these, so per-frame updates go through the material
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uRotation: { value: 0 },
      uScale: { value: 1 },
      uGlow: { value: 0 },
    }),
    [],
  );

  useFrame((_, delta) => {
    const u = material.current?.uniforms;
    const s = state.current;
    const t = targets.current;

    if (!u || !t) return;
    const k = reducedMotion ? 1 : 1 - Math.exp(-2.2 * delta);

    s.time += reducedMotion ? 0 : delta;
    s.scale += (t.scale - s.scale) * k;
    s.glow += (t.glow - s.glow) * k;
    s.rotation += reducedMotion ? 0 : t.spin * delta;
    u.uTime.value = s.time;
    u.uRotation.value = s.rotation;
    u.uScale.value = s.scale;
    u.uGlow.value = s.glow;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <shaderMaterial
        ref={material}
        transparent
        depthWrite={false}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        vertexShader={vertexShader}
      />
    </mesh>
  );
}

/** A square canvas holding one living taijitu. The disc spans 1/1.4 of its width. */
export function TaijituCanvas({
  targets,
  reducedMotion,
  onReady,
}: {
  targets: React.RefObject<TaijituTargets>;
  reducedMotion: boolean;
  /** Called once the canvas exists, so a page can time its animation from then */
  onReady?: () => void;
}) {
  return (
    <Canvas
      aria-hidden
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      dpr={[1, 2]}
      gl={{ alpha: true }}
      // Measure the layout size, not the on-screen one: pages scale this canvas
      // with CSS, and a scaled measurement would shrink the disc twice
      resize={{ offsetSize: true }}
      onCreated={() => onReady?.()}
    >
      <Disc reducedMotion={reducedMotion} targets={targets} />
    </Canvas>
  );
}

export const TAIJITU_DISC_FRACTION = 1 / MARGIN;
