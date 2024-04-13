import clsx from "clsx";
import { Rss } from "react-feather";

import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";

import Link from "next/link";
import styles from "./Header.module.css";
import ToggleThemeButton from "./ToggleThemeButton";
function Header({ theme, className, ...delegated }) {
    return (
        <header className={clsx(styles.wrapper, className)} {...delegated}>
            <Logo />

            <div className={styles.actions}>
                <button className={styles.action}>
                    <Link href={`/rss.xml`}>
                        <Rss
                            size="1.5rem"
                            style={{
                                // Optical alignment
                                transform: "translate(2px, -2px)",
                            }}
                        />
                        <VisuallyHidden>View RSS feed</VisuallyHidden>
                    </Link>
                </button>
                <ToggleThemeButton initialTheme={theme} />
            </div>
        </header>
    );
}

export default Header;
