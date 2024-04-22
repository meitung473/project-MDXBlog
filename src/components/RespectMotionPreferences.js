"use client";

import { MotionConfig } from "framer-motion";

export default function RespectMotionPreferences({ children }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
