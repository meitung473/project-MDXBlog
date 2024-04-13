import Card from "@/components/Card";

import styles from "./CircularColorsDemo.module.css";
import ColorList from "./ColorList";
import TimeElapsedProvider from "./TimeElapsedProvider";
import Timer from "./Timer";

export const COLORS = [
    { label: "red", value: "hsl(348deg 100% 60%)" },
    { label: "yellow", value: "hsl(50deg 100% 55%)" },
    { label: "blue", value: "hsl(235deg 100% 65%)" },
];

function CircularColorsDemo() {
    const timeElapsed = 0;

    // COLORS array:
    // const selectedColor = COLORS[0];
    const selectedIndex = 0;
    return (
        <Card as="section" className={styles.wrapper}>
            <TimeElapsedProvider initialValue={timeElapsed}>
                <ColorList initialIndex={selectedIndex} />
                <Timer />
            </TimeElapsedProvider>
        </Card>
    );
}

export default CircularColorsDemo;
