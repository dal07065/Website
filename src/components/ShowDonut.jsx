import React, { Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model({modelGLB}) {
  const { scene } = useGLTF(modelGLB);
  return <primitive object={scene} />;
}

export default function ShowDonut({model = "pancake.glb", intens= 1.5}) {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
        <ambientLight />
        {/* <pointLight position={[0, 20, 10]} intensity={1.5} /> */}
        <pointLight position={[10, 10, 10]} intensity={intens} />
        <Suspense fallback={null}>
          <Model modelGLB={model}/>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
