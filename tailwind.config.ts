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
            },
            fontFamily: {
                roboto: ['Roboto_400Regular', 'sans-serif'],
                "roboto-medium": ['Roboto_500Medium', 'sans-serif'],
                "roboto-semibold": ['Roboto_600SemiBold', 'sans-serif'],
            },
        }
    },
    plugins: [],
};

export default config;
