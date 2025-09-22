import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({ duration: 0, smooth: true });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-28  z- right-8  p-3 rounded-full bg-yellow-500 text-customNavy shadow-lg transition-opacity duration-300 z-10 ${
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <FaArrowUp />
        </button>
    );
};

export default BackToTop;
