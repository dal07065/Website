import React, { Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model() {
  const { scene } = useGLTF("chungus2.glb");
  return <primitive object={scene} />;
}

export default function ShowDonut(props) {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
        <pointLight position={[20, 20, 20]} intensity={1.5} />
        <pointLight position={[50, -100, -100]} intensity={1.5} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
