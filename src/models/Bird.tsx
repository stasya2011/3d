import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import birdScene from "../assets/3d/bird.glb";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Bird = () => {
  const ref = useRef<Mesh>(null);
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, ref);
  //const { isRotating } = props;

  useEffect(() => {
    if (actions) {
      actions[animations[0].name]?.play();
    }
  });

  useFrame((state) => {
    const { camera, clock } = state;

    if (ref.current) {
      ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
      if (ref.current.position.x > camera.position.x + 10) {
        ref.current.rotation.y = Math.PI;
      } else if (ref.current.position.x < camera.position.x - 10) {
        ref.current.rotation.y = 0;
      }

      if (ref.current.rotation.y === 0) {
        ref.current.position.x += 0.01;
        ref.current.position.z -= 0.01;
      } else {
        ref.current.position.x -= 0.01;
        ref.current.position.z += 0.01;
      }
    }
  });
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={ref}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Bird;
