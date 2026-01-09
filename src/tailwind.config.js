import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                yuGothic: ['"Yu Gothic"', 'sans-serif'],
            },
            colors: {
                theme: {
                    light: '#67e8f9',
                    dark: '#0e7490',
                    default: '#292986',
                    DEFAULT: '#7FA5FE',
                    backgroundColor: '#F0F3F6',
                    sub: '#7FA5FE',
                },
                brand: {
                    primary: '#5071FF',
                    accent: '#6F89FF',
                    muted: '#EEF1FF',
                    text: '#525353',
                    base: '#FFFFFF',
                },
            },
        },
    },

    plugins: [forms],
};
