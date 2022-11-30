import React, { Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model() {
  const { scene } = useGLTF("pancake.glb");
  return <primitive object={scene} />;
}

export default function ShowDonut(props) {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
        <ambientLight />
        {/* <pointLight position={[0, 20, 10]} intensity={1.5} /> */}
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
