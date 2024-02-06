import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Island } from "../models/Island";
import Sky from "../models/Sky";
import Loader from "../components/Loader";

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale: number[] | null = null;
    const screenPosition = [0, -6.5, -43];
    const rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full, h-screen, bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            color={"#b1e1ff"}
            groundColor={"#000"}
            intensity={2}
          />

          <Sky />
          <Island
            position={islandPosition}
            rotation={rotation}
            scale={islandScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
