"use client";
import Cookie from "js-cookie";
import React from "react";
import { Moon, Sun } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./Header.module.css";

import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";

const themeTokens = {
    dark: DARK_TOKENS,
    light: LIGHT_TOKENS,
};

function ToggleThemeButton({ initialTheme }) {
    const [theme, setTheme] = React.useState(initialTheme);

    function toggleTheme() {
        let nextTheme = theme === "light" ? "dark" : "light";
        Cookie.set("theme-color", nextTheme);
        setTheme(nextTheme);

        const root = document.documentElement;
        root.setAttribute("data-color-theme", nextTheme);

        Object.entries(themeTokens[nextTheme]).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });
    }

    return (
        <button className={styles.action} onClick={toggleTheme}>
            {theme === "light" ? <Moon size="1.5rem" /> : <Sun size="1.5rem" />}
            <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
    );
}

export default ToggleThemeButton;
