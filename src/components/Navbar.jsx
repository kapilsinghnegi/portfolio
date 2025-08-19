import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LuMenu, LuX } from "react-icons/lu";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">KSN</span>
          </span>
          .
        </a>

        <div className="flex items-center space-x-4">
          {/* Desktop */}
          <div className="hidden md:flex space-x-8 group">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-lg cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile Nav */}
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="md:hidden p-2 mx-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <LuX size={24} className="cursor-pointer" />
            ) : (
              <LuMenu size={24} className="cursor-pointer" />
            )}
          </button>
          <div
            className={cn(
              "fixed inset-0 bg-background/95 background-blur-md z-40 flex flex-col items-center justify-center min-h-screen",
              "transition-all duration-300 md:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/* Toggle Theme */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
