"use client";
import Card from "@/components/Card";
import React from "react";
import { Pause, Play, RotateCcw } from "react-feather";
import styles from "./CircularColorsDemo.module.css";
// import ColorList from "./ColorList";
import clsx from "clsx";
import { motion } from "framer-motion";
import VisuallyHidden from "../VisuallyHidden";
const COLORS = [
    { label: "red", value: "hsl(348deg 100% 60%)" },
    { label: "yellow", value: "hsl(50deg 100% 55%)" },
    { label: "blue", value: "hsl(235deg 100% 65%)" },
];

function CircularColorsDemo() {
    // const timeElapsed = 0;

    // COLORS array:
    // const selectedColor = COLORS[0];

    // playing | idle
    const [status, setStatus] = React.useState("idle");
    const [timeElapsed, setTimeElapsed] = React.useState(0);
    const id = React.useId();
    React.useEffect(() => {
        if (status !== "playing") return;
        let id = window.setInterval(() => {
            setTimeElapsed((currentTime) => currentTime + 1);
        }, 1000);

        return () => {
            window.clearInterval(id);
        };
    }, [status]);

    const selectedColor = COLORS[Math.floor(timeElapsed % COLORS.length)];

    return (
        <Card as="section" className={styles.wrapper}>
            <ul className={styles.colorsWrapper}>
                {COLORS.map((color, index) => {
                    const isSelected = color.value === selectedColor.value;
                    return (
                        <li className={styles.color} key={index}>
                            {isSelected && (
                                <motion.div
                                    layoutId={`${id}-selected-color-outline`}
                                    className={styles.selectedColorOutline}
                                />
                            )}
                            <div
                                className={clsx(
                                    styles.colorBox,
                                    isSelected && styles.selectedColorBox
                                )}
                                style={{
                                    backgroundColor: color.value,
                                }}
                            >
                                <VisuallyHidden>{color.label}</VisuallyHidden>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.timeWrapper}>
                <dl className={styles.timeDisplay}>
                    <dt>Time Elapsed</dt>
                    <dd>{timeElapsed}</dd>
                </dl>
                <div className={styles.actions}>
                    <button
                        onClick={() => {
                            if (status === "playing") {
                                setStatus("idle");
                                return;
                            }
                            setStatus("playing");
                            setTimeElapsed(timeElapsed + 1);
                        }}
                    >
                        {status === "playing" ? <Pause /> : <Play />}
                        <VisuallyHidden>Play</VisuallyHidden>
                    </button>
                    <button
                        onClick={() => {
                            setStatus("idle");
                            setTimeElapsed(0);
                        }}
                    >
                        <RotateCcw />
                        <VisuallyHidden>Reset</VisuallyHidden>
                    </button>
                </div>
            </div>
        </Card>
    );
}

export default CircularColorsDemo;
