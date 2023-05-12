import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage } from "@react-three/drei";
import {  useEffect, useState } from 'react';
import LogoBlock from './components/LogoBlock';
import StepsBlock from './components/StepsBlock';
import InfoBlock from './components/InfoBlock';
import { Suspense } from 'react';
import { ReactComponent as Loader } from './img/loader.svg';

function Model(props) {
  const { scene } = useGLTF('/t34.glb');

  return (
    <>
      <primitive object={scene} {...props} />
    </>
  )
}


function App() {
  function Loading() {
    return <Loader />
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Canvas
          dpr={[1, 2]}
          shadows='0%'
          camera={{position: [6, 4, 20], fov: 10}}
          style={{ position: "absolute" }}
        >
            <Stage environment="night">
              <Model scale={0.01} />
            </Stage>
          <Rig />
        </Canvas>
      </Suspense>
      <LogoBlock />
      <StepsBlock />
      <InfoBlock />
      <p className="footer-text">© 2009-2023 Lesta Games. All rights reserved. 12+</p>
    </>
  );
}

function Rig() {
  const [coords, setCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleWindowMouseMove = event => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
  }, []);

  useFrame((state) => {
    state.camera.position.lerp({ x: -((coords.x * 0.001) - 2) / 10, y: -((coords.y * 0.001) - 1) / 10, z: state.camera.position.z }, 0.2);
    state.camera.lookAt(0, 0, 0)
  },[])
}

export default App;
