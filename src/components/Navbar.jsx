import { useState } from "react";
function Navbar({darkMode, setDarkMode}) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar sticky top-0 z-50 flex items-center justify-between px-6 py-5 ">
            <a href="#home" className="logo text-2xl font-bold">Haven<span>Homes.</span></a>
            {/* MOBILE MENU BUTTON */}
            <button className="md:hidden text-2xl text-[#D4AF37] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu">
                {menuOpen ? "\u2715" : "\u2630"}
            </button>
            <ul className="nav-links md:flex items-center gap-8 hidden">
                <li><a href="#about">About</a></li>
                <li><a href="#properties">Properties</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="hidden md:flex items-center gap-4">
                <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
                className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] bg-transparent text-2xl
                flex items-center justify-center cursor-pointer">
                    {darkMode ? "\u2600" : "\u263D"}
                </button>
                <a href="#properties" className="nav-button px-6 py-3 rounded-full">Get Started</a>
            </div>
            {/* MOBILE NAVIGATION */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#173B30] text-white flex flex-col items-center gap-6 py-6 z-50 md:hidden">
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#properties" onClick={() => setMenuOpen(false)}>Properties</a>
                    <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                    <button onClick={() => {
                        setDarkMode(!darkMode);
                        setMenuOpen(false);
                    }}
                    className="w-10 h-10 rounded-full border border-[#D4AF37] text-2xl">
                        {darkMode ? "\u2600" : "\u263D"}
                    </button>
                    <a href="#properties"
                    onClick={() => setMenuOpen(false)}
                    className="nav-button px-6 py-3 rounded-full">Get Started</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;