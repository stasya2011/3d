import { useGLTF } from "@react-three/drei";
import skyScreen from "../assets/3d/sky.glb";

const Sky = () => {
  const sky = useGLTF(skyScreen);
  return (
    <mesh>
      <primitive object={sky.scene}></primitive>
    </mesh>
  );
};

export default Sky;
