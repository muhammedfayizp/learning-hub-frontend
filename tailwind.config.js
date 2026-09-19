/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                surface: {
                    light: "#f8fafc",
                    dark: "#0f172a",
                },
            },
        },
    },
};