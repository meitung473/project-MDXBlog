"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "./CircularColorsDemo";
import styles from "./CircularColorsDemo.module.css";
import { useTimer } from "./TimeElapsedProvider";

function ColorList({ initialIndex = 0 }) {
    const { time } = useTimer();

    const id = React.useId();
    let selectedIndex = time ? time % COLORS.length : initialIndex;
    return (
        <ul className={styles.colorsWrapper}>
            {COLORS.map((color, index) => {
                const isSelected = color.value === COLORS[selectedIndex].value;
                return (
                    <li
                        className={styles.color}
                        key={index}
                        style={{
                            zIndex: isSelected ? 1 : 2,
                        }}
                    >
                        {isSelected && (
                            <motion.div
                                layoutId={id}
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
    );
}

export default ColorList;
