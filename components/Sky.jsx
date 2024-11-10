import * as THREE from "three";

const Sky = () => {
    const fragShader = `
uniform vec3 topColor;
uniform vec3 bottomColor;
uniform float offset;
uniform float exponent;

varying vec3 vWorldPosition;

void main() {
float h = normalize( vWorldPosition + offset ).y;
gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h , 0.0), exponent ), 0.0 ) ), 1.0 );
}
`;
    const vertShader = `
varying vec3 vWorldPosition;

void main() {
vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
vWorldPosition = worldPosition.xyz;

gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

    const uniforms = {
        'topColor': { value: new THREE.Color('pink') },
        'bottomColor': { value: new THREE.Color('darkblue') },
        'offset': { value: 0 },
        'exponent': { value: 0.6 }
    };

    return (
        <mesh >
            <sphereGeometry args={[50, 32, 15]} />
            <shaderMaterial fragmentShader={fragShader} vertexShader={vertShader} uniforms={uniforms} side={THREE.BackSide} />
        </mesh >
    )
}
export default Sky;
