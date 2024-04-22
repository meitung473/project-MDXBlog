"use client";
import clsx from "clsx";
import React from "react";

import Card from "@/components/Card";
import SliderControl from "@/components/SliderControl";
import { range } from "@/utils";

import { LayoutGroup, motion } from "framer-motion";
import styles from "./DivisionGroupsDemo.module.css";
import Equation from "./Equation";
function DivisionGroupsDemo({
    numOfItems = 12,
    initialNumOfGroups = 1,
    includeRemainderArea,
}) {
    const [numOfGroups, setNumOfGroups] = React.useState(initialNumOfGroups);

    const numOfItemsPerGroup = Math.floor(numOfItems / numOfGroups);

    const remainder = includeRemainderArea ? numOfItems % numOfGroups : null;

    const id = React.useId();
    // When we're splitting into 1-3 groups, display side-by-side
    // columns. When we get to 4, it should switch to a 2x2 grid.
    const gridStructure =
        numOfGroups < 4
            ? {
                  gridTemplateColumns: `repeat(${numOfGroups}, 1fr)`,
              }
            : {
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
              };

    return (
        <Card as="section" className={styles.wrapper}>
            <header className={styles.header}>
                <SliderControl
                    label="Number of Groups"
                    className={styles.slider}
                    step={1}
                    min={1}
                    max={4}
                    value={numOfGroups}
                    onChange={(ev) => setNumOfGroups(Number(ev.target.value))}
                />
            </header>

            <div className={styles.demoWrapper}>
                <div className={clsx(styles.demoArea)} style={gridStructure}>
                    <LayoutGroup>
                        {range(numOfGroups).map((groupIndex) => (
                            <div className={styles.group} key={groupIndex}>
                                {range(numOfItemsPerGroup).map((index) => {
                                    // back to normal index, not just each group re-calculate index
                                    const prevGroupIndex =
                                        groupIndex * numOfItemsPerGroup;
                                    const layoutId = `${id}-${
                                        prevGroupIndex + index
                                    }`;
                                    return (
                                        <motion.div
                                            layoutId={layoutId}
                                            key={layoutId}
                                            className={styles.item}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </LayoutGroup>
                </div>
            </div>

            {includeRemainderArea && (
                <div className={styles.remainderArea}>
                    <p className={styles.remainderHeading}>Remainder Area</p>
                    {/* [9,10] -> [10,9] */}
                    {range(remainder).map((index) => {
                        const finalIndex = numOfItems - 1;
                        const layoutIndex = finalIndex - index;
                        let layoutId = `${id}-${layoutIndex}`;
                        return (
                            <motion.div
                                layoutId={layoutId}
                                key={layoutId}
                                className={styles.item}
                            />
                        );
                    })}
                </div>
            )}

            <Equation
                dividend={numOfItems}
                divisor={numOfGroups}
                remainder={remainder}
            />
        </Card>
    );
}

export default DivisionGroupsDemo;
