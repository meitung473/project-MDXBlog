"use client";
import React from "react";

const TimeElapsedContext = React.createContext(null);

export default function TimeElapsedProvider({ initialValue = 0, children }) {
    const [toggle, setToggle] = React.useState(false);
    const [time, setTime] = React.useState(initialValue);

    React.useEffect(() => {
        if (typeof window === "undefined") return;
        if (!toggle) return;
        let id = window.setInterval(() => {
            setTime((currentTime) => currentTime + 1);
        }, 1000);

        return () => {
            window.clearInterval(id);
        };
    }, [toggle]);

    function toggleTimer() {
        setToggle((toggle) => !toggle);
    }

    const value = React.useMemo(() => {
        function resetTimer() {
            console.log("reset");
            setTime(initialValue);
            setToggle(false);
        }
        return { resetTimer, time, toggleTimer, toggle };
    }, [initialValue, time, toggle]);

    return (
        <TimeElapsedContext.Provider value={value}>
            {children}
        </TimeElapsedContext.Provider>
    );
}

export function useTimer() {
    const context = React.useContext(TimeElapsedContext);

    if (typeof context === "undefined") {
        throw new Error("There is no TimeElapsedProvider on th top element.");
    }
    const { resetTimer, time, toggleTimer, toggle } = context;
    return { resetTimer, time, toggle, toggleTimer };
}
