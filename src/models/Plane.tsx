import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Plane = (props: any) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);
  const { isRotating } = props;

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  });
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Plane;
