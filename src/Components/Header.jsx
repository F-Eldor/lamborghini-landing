import { useState, useEffect } from "react";
import search2 from "../assets/search2.svg";
import hamburger from "../assets/hamburger.svg";

export const logo = 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/logos/2024/03_26/logo_header_01.svg';

// Helper to resolve asset paths for Vite
const resolveAsset = (path) => {
  if (path.startsWith('http')) return path;
  return new URL(path, import.meta.url).href;
};

export default function Header({ cars, onSelectCar }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'}`}>
        <nav className="flex items-center justify-between p-4 w-[85%] mx-auto relative z-50">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <span className="text-white text-3xl font-bold cursor-pointer">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </span>
            ) : (
              <img src={hamburger} alt="Menu" className="w-6 cursor-pointer" />
            )}
          </button>

          <a href="/"><img src={logo} alt="Lamborghini Logo" className="h-18" /></a>
          <img src={search2} alt="Search" className="w-6 cursor-pointer" />
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 bg-black transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <h2 className="text-white font-bold text-[0px] text-center mt-33">CHOOSE YOUR MODEL</h2>
        <ul className="flex flex-wrap justify-center mt-10 gap-10 overflow-auto max-h-screen p-4">
          {cars.slice(0, 4).map((car, index) => (
            <li
              key={car.name}
              className={`flex flex-col items-center w-150 cursor-pointer transform transition-all duration-300 
                ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-40' : 'opacity-100'} 
                hover:scale-105`}
              onClick={() => {
                onSelectCar(index); 
                setIsMenuOpen(false); 
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={resolveAsset(car.models.image)} alt={car.name} className="w-108 object-contain" />
              <p className="text-white text-3xl mt-3 uppercase font-bold">{car.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}