"use client";
import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";
import Cookie from "js-cookie";
import React from "react";
import { Moon, Sun } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./Header.module.css";

function ToggleThemeButton({ initialTheme }) {
    const [theme, setTheme] = React.useState(initialTheme);

    async function toggleTheme() {
        let nextTheme = theme === "light" ? "dark" : "light";

        // actionSetCookie("theme-color", nextTheme, {
        //     expires: 1000,
        // });
        // js-cookie
        Cookie.set("theme-color", nextTheme, {
            expires: 1000,
        });

        // next-action.js
        setTheme(nextTheme);

        const root = document.documentElement;
        root.setAttribute("data-color-theme", nextTheme);

        const colorThemeTokens =
            nextTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;

        Object.entries(colorThemeTokens).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });
    }

    return (
        <button className={styles.action} onClick={toggleTheme}>
            {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}

            {theme === "light" ? (
                <VisuallyHidden>Toggle dark mode</VisuallyHidden>
            ) : (
                <VisuallyHidden>Toggle light mode</VisuallyHidden>
            )}
        </button>
    );
}

export default ToggleThemeButton;
