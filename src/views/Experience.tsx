import { Perf } from "r3f-perf";
import { Grid, KeyboardControls } from "@react-three/drei";
import Lights from "../components/setup/Lights";
import Ecctrl from "../components/setup/Ecctrl";
import { Physics } from "@react-three/rapier";
import CharacterModel from "../components/setup/CharacterModel";
import { useControls } from "leva";
import React, { useEffect, useState } from "react";
import Floor from "../components/setup/Floor";

function Experience() {
    const [pausedPhysics, setPausedPhysics] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPausedPhysics(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    const { physics, disableFollowCam } = useControls("World Settings", {
        physics: false,
        disableFollowCam: false,
    });

    const keyboardMap = [
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
        { name: "run", keys: ["Shift"] },
        { name: "action1", keys: ["1"] },
        { name: "action2", keys: ["2"] },
        { name: "action3", keys: ["3"] },
        { name: "action4", keys: ["KeyF"] },
    ];

    return (
        <>
            <Perf position="top-left" minimal />
            <Grid
                args={[300, 300]}
                sectionColor={"hsl(280, 30%, 30%)"}
                cellColor={"gray"}
                position={[0, -0.99, 0]}
                userData={{ camExcludeCollision: true }}
            />

            <Lights />


            <Physics debug={physics} timeStep="vary" paused={pausedPhysics}>
                <KeyboardControls map={keyboardMap}>
                    <Ecctrl
                        debug
                        animated
                        followLight
                        springK={2}
                        mode="FixedCamera"
                        dampingC={0.2}
                        autoBalanceSpringK={1.2}
                        autoBalanceDampingC={0.04}
                        autoBalanceSpringOnY={0.7}
                        autoBalanceDampingOnY={0.05}
                        disableFollowCam={disableFollowCam}
                    >
                        <CharacterModel />
                    </Ecctrl>
                </KeyboardControls>

                <Floor />
            </Physics>
        </>
    )
}

export default Experience
