import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                green: "#008000",
                yellow: "#FFD700",
                blue: "#0550A2"
            }
        }
    },
    plugins: [],
};

export default config;
