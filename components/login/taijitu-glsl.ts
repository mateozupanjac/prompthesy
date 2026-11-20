// The taijitu (太極圖) as a signed shape, built from circles so it stays exact at
// any size. In local space the disc has radius 1; yang is the right half with
// the lower small circle, yin the left half with the upper one, each holding a
// dot of the other.

export const TAIJITU_GLSL = /* glsl */ `
  // x: yang amount (1 = yang), y: inside the disc, z: the rim line, w: glow outside
  vec4 taijitu(vec2 p, float aa) {
    float r = length(p);
    float yang = smoothstep(-aa, aa, p.x);
    float upper = 1.0 - smoothstep(0.5 - aa, 0.5 + aa, length(p - vec2(0.0, 0.5)));
    float lower = 1.0 - smoothstep(0.5 - aa, 0.5 + aa, length(p - vec2(0.0, -0.5)));
    yang = mix(yang, 0.0, upper);
    yang = mix(yang, 1.0, lower);
    float dotR = 0.13;
    float dotUpper = 1.0 - smoothstep(dotR - aa, dotR + aa, length(p - vec2(0.0, 0.5)));
    float dotLower = 1.0 - smoothstep(dotR - aa, dotR + aa, length(p - vec2(0.0, -0.5)));
    yang = mix(yang, 1.0, dotUpper);
    yang = mix(yang, 0.0, dotLower);
    float inside = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, r);
    float rim = 1.0 - smoothstep(0.004, 0.004 + aa * 1.5, abs(r - 1.0));
    float glow = exp(-max(r - 1.0, 0.0) * 5.0) * smoothstep(1.0 - aa, 1.0 + aa, r);
    return vec4(yang, inside, rim, glow);
  }

  float hash21(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
  float noise21(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
               mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm21(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise21(p); p *= 2.03; a *= 0.5; }
    return v;
  }
`;

// Palette, as linear-ish shader colours (the canvas writes them out unconverted)
export const GLSL_PALETTE = /* glsl */ `
  const vec3 SILK = vec3(0.91, 0.875, 0.784);
  const vec3 SILK_LIGHT = vec3(0.985, 0.96, 0.9);
  const vec3 LACQUER = vec3(0.09, 0.071, 0.059);
  const vec3 XUAN = vec3(0.047, 0.039, 0.035);
  const vec3 HUANG = vec3(0.788, 0.604, 0.18);
  const vec3 CINNABAR = vec3(0.761, 0.196, 0.122);
`;
