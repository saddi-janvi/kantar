import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group, Vector3 } from "three";

useGLTF.preload("/talking.glb");

export default function Model() {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF("/talking.glb");
  const { actions } = useAnimations(animations, scene);
  const [isJumpingDown, setIsJumpingDown] = useState(true);

  useEffect(() => {
    if (group.current) {
      group.current.position.y = 5;
      group.current.position.x = 0.2;
    }
    const jumpDownAction = actions["Static Pose"];
    if (jumpDownAction) {
      jumpDownAction.play();
    }
  }, [actions]);

  useFrame((state, delta) => {
    if (isJumpingDown && group.current) {
      if (group.current.position.y > -1.8) {
        group.current.position.y -= delta * 5;
      } else {
        setIsJumpingDown(false);
        if (actions["Static Pose"]) {
          actions["Static Pose"].stop();
        }
        if (actions["mixamo.com"]) {
          actions["mixamo.com"].play();
        }
      }
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={new Vector3(1.5, 1.5, 1.5)} />
    </group>
  );
}
