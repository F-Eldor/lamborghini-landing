import { useState, useRef } from "react";
import Header from "./Header";

// ✅ Importlar
import revueltoF from '../assets/revuelto-front.png';
import revueltoL from '../assets/revuelto-logo2.svg';
import revueltoS from '../assets/revuelto-side.webp';
import revueltoV from '../assets/revuelto-vd2.mp4';

import temerarioF from '../assets/temerario-front.png';
import temerarioL from '../assets/temerario-logo.svg';
import temerarioS from '../assets/temerario-side.webp';
import temerarioV from '../assets/revuelto-vd2.mp4';

import huracanF from '../assets/huracan-front.png';
import huracanL from '../assets/huracan-logo.svg';
import huracanS from '../assets/huracan-side.webp';
import huracanV from '../assets/revuelto-vd2.mp4';

import urusF from '../assets/urus-front.webp';
import urusL from '../assets/urus-logo.svg';
import urusS from '../assets/urus-side.webp';
import urusV from '../assets/revuelto-vd2.mp4';


export default function HeroPage() {
  const cars = [
    {
      name: "Revuelto",
      hero: {
        video: revueltoV,
        title: "Tamed By No One",
        subtitle: "Revuelto",
        button: {
          text: "Discover More",
          url: "https://www.lamborghini.com/en-en/models/revuelto",
        },
      },
      specifications: {
        background: "black",
        stats: [
          { title: "Max Power (combined)", value: "747", unit: "kW" },
          { title: "Top Speed", value: ">350", unit: "km/h" },
          { title: "0–100 km/h", value: "2.5", unit: "s" },
        ],
        button: {
          text: "Start Configuration",
          url: "https://www.lamborghini.com/en-en/models/revuelto/configurator",
        },
        image: revueltoF,
      },
      models: {
        title: "MODELS",
        subtitle: "DISCOVER ALL MODELS",
        link: "https://www.lamborghini.com/en-en/models",
        logo: revueltoL,
        tagline: "FROM NOW ON",
        image: revueltoS,
        button: {
          text: "EXPLORE THE MODEL",
          url: "https://www.lamborghini.com/en-en/models/revuelto",
        },
      },
    },
    {
      name: "Temerario",
      hero: {
        video: temerarioV,
        title: "From the Alps to the Sea",
        subtitle: "Temerario",
        button: {
          text: "Discover More",
          url: "https://www.lamborghini.com/en-en/models/temerario",
        },
      },
      specifications: {
        background: "black",
        stats: [
          { title: "Max Power (combined)", value: "677", unit: "kW" },
          { title: "Top Speed", value: "343", unit: "km/h" },
          { title: "0–100 km/h", value: "2.7", unit: "s" },
        ],
        button: {
          text: "Start Configuration",
          url: "https://www.lamborghini.com/en-en/models/temerario/configurator",
        },
        image: temerarioF,
      },
      models: {
        title: "MODELS",
        subtitle: "DISCOVER ALL MODELS",
        link: "https://www.lamborghini.com/en-en/models",
        logo: temerarioL,
        tagline: "YOU CAN'T HIDE WHO YOU ARE",
        image: temerarioS,
        button: {
          text: "EXPLORE THE MODEL",
          url: "https://www.lamborghini.com/en-en/models/temerario",
        },
      },
    },
    {
      name: "Urus",
      hero: {
        video: urusV,
        title: "Born to Thrill",
        subtitle: "Urus",
        button: {
          text: "Discover More",
          url: "https://www.lamborghini.com/en-en/models/urus",
        },
      },
      specifications: {
        background: "black",
        stats: [
          { title: "Max Power", value: "490", unit: "kW" },
          { title: "Top Speed", value: "305", unit: "km/h" },
          { title: "0–100 km/h", value: "3.3", unit: "s" },
        ],
        button: {
          text: "Start Configuration",
          url: "https://www.lamborghini.com/en-en/models/urus/configurator",
        },
        image: urusF,
      },
      models: {
        title: "MODELS",
        subtitle: "DISCOVER ALL MODELS",
        link: "https://www.lamborghini.com/en-en/models",
        logo: urusL,
        tagline: "DARE TO LIVE MORE",
        image: urusS,
        button: {
          text: "EXPLORE THE MODEL",
          url: "https://www.lamborghini.com/en-en/models/urus",
        },
      },
    },
    {
      name: "Huracán",
      hero: {
        video: huracanV,
        title: "Pure Emotion",
        subtitle: "Huracán",
        button: {
          text: "Discover More",
          url: "https://www.lamborghini.com/en-en/models/huracan",
        },
      },
      specifications: {
        background: "black",
        stats: [
          { title: "Max Power", value: "470", unit: "kW" },
          { title: "Top Speed", value: "325", unit: "km/h" },
          { title: "0–100 km/h", value: "2.9", unit: "s" },
        ],
        button: {
          text: "Start Configuration",
          url: "https://www.lamborghini.com/en-en/models/huracan/configurator",
        },
        image: huracanF,
      },
      models: {
        title: "MODELS",
        subtitle: "DISCOVER ALL MODELS",
        link: "https://www.lamborghini.com/en-en/models",
        logo: huracanL,
        tagline: "BEYOND THE CONCRETE",
        image: huracanS,
        button: {
          text: "EXPLORE THE MODEL",
          url: "https://www.lamborghini.com/en-en/models/huracan",
        },
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeCar = cars[activeIndex];
  const carouselRef = useRef(null);

  const next = () => setActiveIndex((prev) => (prev + 1) % cars.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + cars.length) % cars.length);
  const handleSelectCar = (index) => setActiveIndex(index);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <video
          src={activeCar.hero.video}
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
            className="text-[110px] font-extrabold uppercase leading-[1.1] tracking-tight w-140"
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

      <section
        className={`w-full py-[80px] md:py-[120px] flex items-center justify-center bg-${activeCar.specifications.background}`}
      >
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
            src={activeCar.specifications.image}
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
                <img className="my-5" src={car.models.logo} alt={`${car.name} logo`} />
                <p
                  className="text-[85px] my-5 font-extrabold uppercase leading-[1.1] tracking-tight"
                  style={{ fontFamily: `'Oswald', 'Bebas Neue', 'Anton', sans-serif` }}
                >
                  {car.models.tagline.toUpperCase()}
                </p>
                <img src={car.models.image} alt={car.name} className="w-[70%] object-contain transition-transform duration-500" />
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
