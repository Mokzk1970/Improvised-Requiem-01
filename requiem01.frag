/*{ "audio": true }*/
precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D spectrum;
uniform sampler2D backbuffer;
uniform sampler2D samples;
uniform float volume;
uniform sampler2D texture;



float random(in vec2 p) {
    return fract(sin(dot(p, vec2(5395.3242, 38249.2348))) * 248.24);
}
float noise (in vec2 st) {

      vec2 i = floor(st);
      vec2 f = fract(st);

      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f*f*(3.0-2.0*f);

      return mix(a, b, u.x) +
              (c - a)* u.y * (1.0 - u.x) +
              (d - b) * u.x * u.y;
}
float fbm(in vec2 p) {
    return fract(sin(dot(p, vec2(5395.324, 38249.2348))) * 248.24);
}
vec2 rotate(vec2 p, float t) {
    t *= .001;
	  return mat2(
		cos(t), -sin(t),
		sin(t), cos(t)
	) * p;
}
void main() {

  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 color = texture2D(texture, uv);

  float freq = texture2D(spectrum, vec2(uv.x, .5)).r;
  float wave = texture2D(samples, vec2(uv.x, .5)).r;

  float r = cos(wave) - step(0.25, abs(wave - uv.y));
  //float g = 1. - step(0.01, abs(freq - uv.y));
  //float b = 1. - step(0.01, abs(volume / 255. - uv.y));


  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
//  vec2 uv = gl_FragCoord.xy / resolution;

  float a = atan(p.y, p.x);
  float l = length(p);
  p += fbm(vec2(p + l * 20. + a * sin(time * .3) * 10.)) * .2;

  p = vec2(length(p - .1));
  p -= time * .01;

//    gl_FragColor = vec4(r, g, b, 1.);
  gl_FragColor = vec4(
    texture2D(spectrum, mod(p * .39 - time * .19, .7)).r + r,
    texture2D(spectrum, mod(p * .31 - time * .13, .54)).r + r,
    texture2D(spectrum, mod(p * .37 - time * .17, .6)).r + r,
    0.00001
  ) ;
}
