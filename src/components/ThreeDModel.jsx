// src/components/ThreeDModel.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = () => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      {/* Bigger cube */}
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="#00BFFF" />
    </mesh>
  );
};

const ThreeDModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Cube />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ThreeDModel;
