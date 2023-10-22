import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Raspberry } from "./Scene";

function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return <OrbitControls args={[camera, domElement]} />;
}

export function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[500, 500, 500]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />
      <Controls />
      <Raspberry />
    </Canvas>
  );
}
