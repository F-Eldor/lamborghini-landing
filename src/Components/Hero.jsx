import { useState, useRef } from "react";
import Header from "./Header";
import data from "./Data.json";


// Helper to resolve asset paths for Vite
const resolveAsset = (path) => {
  if (path.startsWith('http')) return path;
  return new URL(path, import.meta.url).href;
};

export default function HeroPage() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const cars = data.cars;
  const activeCar = cars[activeIndex];
  const carouselRef = useRef(null);

  const next = () => setActiveIndex((prev) => (prev + 1) % cars.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + cars.length) % cars.length);

  const handleSelectCar = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <video
          src={resolveAsset(activeCar.hero.video)}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="h-full w-full bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="absolute top-[32%] left-[8%] text-white z-30 flex flex-col gap-8 max-w-[520px]">
          <p className="text-4xl md:text-5xl font-semibold text-gray-300 uppercase">
            {activeCar.hero.subtitle}
          </p>
          <h1
            className="text-[85px] md:text-[93px] font-extrabold uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: `'Oswald', 'Bebas Neue', 'Anton', sans-serif` }}
          >
            {activeCar.hero.title}
          </h1>
          <a
            href={activeCar.hero.button.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 mt-4 px-12 py-4 border border-gray-300 text-sm md:text-base tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-500 ease-in-out w-fit"
          >
            {activeCar.hero.button.text}
            <ArrowIcon />
          </a>
        </div>

        <Header cars={cars} onSelectCar={handleSelectCar} />
      </section>

      <section className={`w-full py-[80px] md:py-[120px] flex items-center justify-center bg-${activeCar.specifications.background}`}>
        <div className="max-w-[85%] w-full flex flex-col md:flex-row items-center justify-between text-white gap-12">
          <div className="flex flex-col items-center md:items-start gap-12">
            {activeCar.specifications.stats.map((stat, i) => (
              <SpecItem key={i} title={stat.title} value={stat.value} unit={stat.unit} />
            ))}
            <a
              href={activeCar.specifications.button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-3 px-10 py-4 border border-gray-400 text-sm tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-500 ease-in-out w-fit"
            >
              {activeCar.specifications.button.text}
              <ArrowIcon />
            </a>
          </div>
          <img
            src={resolveAsset(activeCar.specifications.image)}
            alt={`${activeCar.name} front`}
            className="w-[700px] md:w-[700px] lg:w-[900px] object-contain"
          />
        </div>
      </section>

      <section className="bg-white w-full py-16 flex flex-col items-center relative">
        <div className="flex w-[85%] items-center justify-between mb-20 mt-5">
          <h2 className="text-4xl font-semibold ">MODELS</h2>
          <a
            href="https://www.lamborghini.com/en-en/models#"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-3 px-10 py-4 border-b border-gray-400 text-sm tracking-[0.25em] uppercase hover:bg-gray-100 hover:text-black transition-all duration-500 ease-in-out w-fit"
          >
            DISCOVER ALL MODELS
            <ArrowIcon />
          </a>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {cars.map((car, index) => (
              <div key={`${car.name}-${index}`} className="flex-shrink-0 w-full flex flex-col items-center">
                <img className="my-5" src={resolveAsset(car.models.logo)} alt="" />
                <p
                  className="text-[85px] my-5 font-extrabold uppercase leading-[1.1] tracking-tight"
                  style={{ fontFamily: `'Oswald', 'Bebas Neue', 'Anton', sans-serif` }}
                >
                  {car.models.tagline.toUpperCase()}
                </p>
                <img src={resolveAsset(car.models.image)} alt={car.name} className="w-[70%] object-contain transition-transform duration-500" />
                <a
                  href={car.models.button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 px-10 py-4 border border-gray-400 text-sm tracking-[0.25em] uppercase hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
                >
                  {car.models.button.text}
                  <ArrowIcon />
                </a>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="absolute top-50 left-30 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-black text-white text-2xl font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed clip-hex"
          >
            ‹
          </button>

          <button
            onClick={next}
            disabled={activeIndex === cars.length - 1}
            className="absolute top-50 right-30 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-black text-white text-2xl font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed clip-hex"
          >
            ›
          </button>
        </div>
      </section>
    </>
  );
}

function SpecItem({ title, value, unit }) {
  return (
    <div className="text-center md:text-left">
      <h2 className="text-2xl text-[#9c9c9c] font-light tracking-wider mb-2">{title}</h2>
      <p
        className="font-extrabold text-7xl md:text-8xl flex items-end gap-3 leading-none"
        style={{ fontFamily: `'Oswald', 'Bebas Neue', 'Anton', sans-serif` }}
      >
        {value}
        <span className="text-2xl font-light mb-2">{unit}</span>
      </p>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 227.096 227.096" className="w-5 h-5 fill-current">
      <polygon
        fill="currentColor"
        points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 146.933,181.902 152.835,187.811 227.096,113.55"
      />
    </svg>
  );
}