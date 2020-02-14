import React from "react";

//import dark mode hook
import { useDarkMode } from "./hooks/useDarkMode";

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar" data-testid='navbar'>
            <h1>Woman World Cup</h1>
            <div className="dark-mode__toggle" data-testid='dark-mode_toggle'>
                <div
                    onClick={toggleMode}
                    className={darkMode ? "toggle toggled" : "toggle"}
                />
            </div>
        </nav>
    );
};

export default Navbar;
