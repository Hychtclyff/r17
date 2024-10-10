import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },

            colors: {
                primary: "#289348",
                primary_100: "#DFF6E6",
                primary_200: "#C0EECD",
                primary_300: "#A0E5B5",
                primary_400: "#80DC9C",
                primary_500: "#60D483",
                primary_600: "#60D483",
                primary_700: "#31B358",
                primary_800: "#217A3C",
                primary_800: "#1A602F",
                primary_800: "#1A602F",
                primary_900: "#1A602F",
                primary_1000: "#134723",

                secondary: "#F0F425",

                hijau_utama: "#13AC8A",
            },
        },
    },

    plugins: [forms],
};
