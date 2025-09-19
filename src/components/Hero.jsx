import { useState, useEffect } from "react";
import heroImage from "../assets/hero-bg.webp";
import heroImage2 from "../assets/hero-sample-2.webp";
import overlayImage from "../assets/hero-bg-waves.webp";
import shapeImage from "../assets/main-slider-shape-1-2.png";
import dotsImage from "../assets/dots.png";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const slides = [
    {
        id: 1,
        title: "Insurance for the better family",
        highlight: "life.",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iure ea suscipit ad! Laborum sed eum consequatur? Sapiente, repellendus odio!",
        heroImg: heroImage,
    },
    {
        id: 2,
        title: "Protect your family's future",
        highlight: "today.",
        description:
            "Plan ahead and secure peace of mind. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        heroImg: heroImage2,
    },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const slide = slides[currentSlide];

    return (
        <div className="relative h-[55vh] md:h-[70vh] ">
            <div className="absolute inset-0 bg-gradient-to-r  from-custonDarkNavy/100 via-customNavy/90 md:bg-gradient-to-r md:from-customNavy/100 md:via-customNavy/80 lg:from-custonDarkNavy/100 lg:via-customNavy/100 z-10 md:max-w-[95%]"></div>

            <div className="max-w-5xl mx-auto">
                <img
                    src={overlayImage}
                    alt="Overlay"
                    className="absolute inset-0 object-cover h-full w-[50vw] z-10 md:opacity-[0.0.5] opacity-[0.02]"
                />

                <img
                    src={shapeImage}
                    alt="Shape"
                    className="absolute top-14 left-14 w-20 h-20 md:w-32 md:h-24 animate-spin-slow z-50"
                />
                <img
                    src={dotsImage}
                    alt="Shape"
                    className="absolute -bottom-32 -left-52 h-[50vh] z-30  animate-pulse-slow"
                />

                {/* AnimatePresence wrapping content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start relative z-10"
                    >
                        <h1 className="text-5xl px-4 md:px-4 md:text-7xl lg:px-0 md:max-w-3xl font-medium tracking-tighter mt-40 text-white text-center md:text-left">
                            {slide.title}{" "}
                            <span className="text-yellow-500 font-medium">
                                {slide.highlight}
                            </span>
                        </h1>
                        <p className="mt-4 px-4 text-sm md:px-4 md:max-w-xl lg:px-0 md:text-lg text-gray-400 font-medium text-center md:text-left">
                            {slide.description}
                        </p>
                        <motion.button
                            className="mt-8 mx-auto md:mx-0 bg-blue-600 px-6 py-3 text-sm md:text-lg font-extrabold cursor-pointer hover:bg-yellow-500 transition-colors duration-300 text-white tracking-tighter"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 500 }}
                        >
                            Let's Get Started
                        </motion.button>
                    </motion.div>
                </AnimatePresence>

                {/* AnimatePresence wrapping background image */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={slide.id}
                        src={slide.heroImg}
                        alt=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-0 right-0 w-full h-full object-cover -z-0 md:w-auto filter grayscale-[10%]"
                    />
                </AnimatePresence>

                {/* Arrow Navigation */}
                <div className="absolute top-1/2 left-10 right-10 flex justify-between px-4 md:px-0 z-30">
                    <button
                        onClick={() =>
                            setCurrentSlide(
                                (prev) =>
                                    (prev - 1 + slides.length) % slides.length
                            )
                        }
                        className="text-white text-3xl md:text-5xl cursor-pointer z-50"
                    >
                        <IoChevronBack />
                    </button>
                    <button
                        onClick={() =>
                            setCurrentSlide(
                                (prev) => (prev + 1) % slides.length
                            )
                        }
                        className="text-white text-3xl md:text-5xl "
                    >
                        <IoChevronForward />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
