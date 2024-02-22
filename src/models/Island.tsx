import { useCallback, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import { Group } from "three";
import { IIsland } from "../types";
import islandScreen from "../assets/island.glb";

export function Island(props: IIsland) {
  const islandRef = useRef<Group>(null);
  const { isRotating, setIsRotating, setCurrentStage } = props;
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScreen);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = useCallback(
    (e: PointerEvent | TouchEvent) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(true);

      let clientX;
      if ("touches" in e) {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }
      lastX.current = clientX;
    },
    [setIsRotating]
  );

  const handlePointerUp = useCallback(
    (e: PointerEvent | TouchEvent) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);

      let clientX;
      if ("touches" in e) {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }

      const delta = (clientX - lastX.current) / viewport.width;
      if (islandRef.current) {
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    },
    [setIsRotating, viewport.width]
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent | TouchEvent) => {
      e.stopPropagation();
      e.preventDefault();

      if (isRotating && islandRef.current) {
        // If rotation is enabled, calculate the change in clientX position
        let clientX;
        if ("touches" in e) {
          clientX = e.touches[0].clientX;
        } else {
          clientX = e.clientX;
        }

        // calculate the change in the horizontal position of the mouse cursor or touch input,
        // relative to the viewport's width
        const delta = (clientX - lastX.current) / viewport.width;

        // Update the island's rotation based on the mouse/touch movement
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;

        // Update the reference for the last clientX position
        lastX.current = clientX;

        // Update the rotation speed
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    },
    [isRotating, viewport.width]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);
        if (islandRef.current) {
          islandRef.current.rotation.y += 0.1 * Math.PI;
          rotationSpeed.current = 0.0125;
        }
      } else {
        if (!isRotating) setIsRotating(true);
        if (islandRef.current) {
          islandRef.current.rotation.y += 0.1 * Math.PI;
          rotationSpeed.current = -0.0125;
        }
      }
    },
    [isRotating, setIsRotating]
  );

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setIsRotating(false);
      }
    },
    [setIsRotating]
  );

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      if (islandRef.current) {
        islandRef.current.rotation.y += rotationSpeed.current;
      }
    } else {
      if (islandRef.current) {
        const rotation = islandRef.current.rotation.y;

        const normalizedRotation =
          ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            setCurrentStage(4);
            break;
          case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
            setCurrentStage(3);
            break;
          case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            setCurrentStage(2);
            break;
          case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    gl,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    handleKeyUp,
    handleKeyDown,
  ]);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}
