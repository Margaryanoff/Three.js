import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import IslandMain from "../models/IslandMain";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreenSize = () => {
        let screeScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screeScale = [0.9, 0.9, 0.9];
        } else {
            screeScale = [1, 1, 1];
        }

        return [screeScale, screenPosition, rotation];
    };

    const adjustPlaneForScreenSize = () => {
        let screeScale, screenPosition;

        if (window.innerWidth < 768) {
            screeScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screeScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }
        return [screeScale, screenPosition];
    };

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <section className="w-full h-screen relative popup">
            <div className="absalute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas
                className={`w-full h-screen bg-transparent ${
                    isRotating ? "cursor-grabbing" : "cursor-grab"
                }`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight
                        skyColor="#b1e1ff"
                        groundColor="#000000"
                        intensity={1}
                    />
                    <Bird />
                    <Sky isRotating={isRotating} />
                    <IslandMain
                        setCurrentStage={setCurrentStage}
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Plane
                        isRotating={isRotating}
                        planeScale={planeScale}
                        planePosition={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;
