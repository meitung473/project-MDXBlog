"use client";
import { Pause, Play, RotateCcw } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./CircularColorsDemo.module.css";
import { useTimer } from "./TimeElapsedProvider";

function Timer() {
    const { toggle, toggleTimer, resetTimer, time: timeElapsed } = useTimer();
    return (
        <div className={styles.timeWrapper}>
            <dl className={styles.timeDisplay}>
                <dt>Time Elapsed</dt>
                <dd>{timeElapsed}</dd>
            </dl>
            <div className={styles.actions}>
                <button onClick={toggleTimer}>
                    {toggle ? <Pause /> : <Play />}
                    <VisuallyHidden>Play</VisuallyHidden>
                </button>
                <button onClick={resetTimer}>
                    <RotateCcw />
                    <VisuallyHidden>Reset</VisuallyHidden>
                </button>
            </div>
        </div>
    );
}

export default Timer;
