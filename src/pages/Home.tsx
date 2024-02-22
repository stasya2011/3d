import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Island } from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import soundon from "../assets/icons/soundon.png";
import soundoff from "../assets/icons/soundoff.png";
import { IPosition } from "../types";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => audioRef.current.pause();
  }, [isPlayingMusic]);

  const toggleMusic = () =>
    setIsPlayingMusic((prevState: boolean) => !prevState);

  const adjustIslandForScreenSize = (): IPosition[] => {
    let screenScale: IPosition | null = null;
    const screenPosition: IPosition = [0, -6.5, -43];
    const rotation: IPosition = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = (): IPosition[] => {
    let screenScale: IPosition, screenPosition: IPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -3, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-20 left-0 right-0 z-10 flex justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full, h-screen, bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
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
          <Bird />
          <Sky isRotating={isRotating} />
          <Plane
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
            isRotating={isRotating}
          />

          <Island
            position={islandPosition}
            rotation={rotation}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

      <div className="absolute left-2 bottom-2">
        <img
          src={isPlayingMusic ? soundoff : soundon}
          alt="Sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={toggleMusic}
        />
      </div>
    </section>
  );
};

export default Home;
