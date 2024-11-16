import { Suspense, useRef, useState } from "react";
import { View } from "react-native";
import { GLView, ExpoWebGLRenderingContext } from "rn-angle-gl";
import { Canvas, useFrame } from "@react-three/fiber/native";
import * as THREE from "three";

function onContextCreate(gl: ExpoWebGLRenderingContext) {
  // gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  // gl.clearColor(0, 1, 1, 1);
  // // Create vertex shader (shape & position)
  // const vert = gl.createShader(gl.VERTEX_SHADER)!;
  // gl.shaderSource(
  //   vert,
  //   `
  //   void main(void) {
  //     gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  //     gl_PointSize = 150.0;
  //   }
  // `
  // );
  // gl.compileShader(vert);
  // // Create fragment shader (color)
  // const frag = gl.createShader(gl.FRAGMENT_SHADER)!;
  // gl.shaderSource(
  //   frag,
  //   `
  //   void main(void) {
  //     gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  //   }
  // `
  // );
  // gl.compileShader(frag);
  // // Link together into a program
  // const program = gl.createProgram()!;
  // gl.attachShader(program, vert);
  // gl.attachShader(program, frag);
  // gl.linkProgram(program);
  // gl.useProgram(program);
  // gl.clear(gl.COLOR_BUFFER_BIT);
  // gl.drawArrays(gl.POINTS, 0, 1);
  // gl.flush();
  // gl.endFrameEXP();
}

const Scene = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  return (
    <>
      <ambientLight />
      <mesh
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    </>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GLView
        style={{ width: 300, height: 300 }}
        onContextCreate={onContextCreate}
      />
      {/* <Canvas>
        <Scene />
      </Canvas> */}
    </View>
  );
}
