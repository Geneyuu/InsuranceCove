/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                customMint: "#cdffd8", // light green mint
                customSky: "#94b9ff", // soft blue
                customNavy: "#16243d", // dark navy
                custonDarkNavy: "#111D32",
                customWhite: "#ffffff", // white
                customYellow: "#ffff00", // yellow
            },
            screens: {
                xs: "360px", // small phones
                sm: "480px", // phones
                md: "768px", // tablets
                lg: "1024px", // small laptops
                xl: "1280px", // desktops
                "2xl": "1536px", // large screens
                "4k": "2560px", // ultra-wide / 4K monitors
                custom: "860px", // ✅ bagong breakpoint
            },
            fontSize: {
                h1: [
                    "clamp(2rem, 1rem + 3vw, 3rem)", // 32px → 48px
                    { lineHeight: "1.2", fontWeight: "700" },
                ],
                h2: [
                    "clamp(1.75rem, 0.9rem + 2.5vw, 2.5rem)", // 28px → 40px
                    { lineHeight: "1.3", fontWeight: "700" },
                ],
                h3: [
                    "clamp(1.5rem, 0.8rem + 2vw, 2rem)", // 24px → 32px
                    { lineHeight: "1.3", fontWeight: "600" },
                ],
                h4: [
                    "clamp(1.25rem, 0.7rem + 1.5vw, 1.75rem)", // 20px → 28px
                    { lineHeight: "1.4", fontWeight: "600" },
                ],
                h5: [
                    "clamp(1.125rem, 0.6rem + 1vw, 1.5rem)", // 18px → 24px
                    { lineHeight: "1.4", fontWeight: "500" },
                ],
                h6: [
                    "clamp(1rem, 0.5rem + 0.8vw, 1.25rem)", // 16px → 20px
                    { lineHeight: "1.5", fontWeight: "500" },
                ],
                p: [
                    "clamp(1rem, 0.6rem + 0.5vw, 1.125rem)", // 16px → 18px
                    { lineHeight: "1.6", fontWeight: "400" },
                ],
                small: [
                    "clamp(0.875rem, 0.5rem + 0.3vw, 1rem)", // 14px → 16px
                    { lineHeight: "1.4", fontWeight: "400" },
                ],
                tiny: [
                    "clamp(0.75rem, 0.4rem + 0.2vw, 0.875rem)", // 12px → 14px
                    { lineHeight: "1.3", fontWeight: "400" },
                ],
            },
        },
        fontFamily: {
            sans: ["DM Sans", "sans-serif"], // override default sans
            dmsans: ["DM Sans", "sans-serif"], // optional custom name
        },
        animation: {
            "spin-slow": "spin 5s linear infinite",
            "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        },
    },
    plugins: [],
};
