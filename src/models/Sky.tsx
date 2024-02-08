import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import skyScreen from "../assets/3d/sky.glb";

const Sky = ({ isRotating }: { isRotating: boolean }) => {
  const skyRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += delta * 0.25;
    }
  });
  const sky = useGLTF(skyScreen);
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene}></primitive>
    </mesh>
  );
};

export default Sky;
