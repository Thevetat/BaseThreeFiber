import { Canvas } from "@react-three/fiber";
import './App.css'
import Experience from "./views/Experience";
import { Suspense, useEffect, useState } from "react";
import { Leva } from "leva";
import { EcctrlJoystick } from "./components/setup/EcctrlJoystick";

function App() {

    const EcctrlJoystickControls = () => {
        const [isTouchScreen, setIsTouchScreen] = useState(false)
        useEffect(() => {
            if (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0)) {
                setIsTouchScreen(true)
            } else {
                setIsTouchScreen(false)
            }
        }, [])
        return (
            <>
                {isTouchScreen && <EcctrlJoystick buttonNumber={5} />}
            </>
        )
    }

    return (
        <>
            <Leva collapsed />
            <EcctrlJoystickControls />
            <Canvas
                shadows
                camera={{
                    fov: 65,
                    near: 0.1,
                    far: 1000,
                }}
                onPointerDown={(e) => {
                    if (e.pointerType === 'mouse') {
                        (e.target as HTMLCanvasElement).requestPointerLock()
                    }
                }}
            >
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </Canvas>
        </>
    )
}

export default App
