/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        
        colors: {
            'white': '#FFFFFF',
            'black': '#242424',
            'grey': '#F3F4F6',
            'grey-300': '#D1D5DB',
            'grey-900': '#111827',
            'dark-grey': '#6B6B6B',
            'red': '#FF4E4E',
            'transparent': 'transparent',
            'twitter': '#1DA1F2',
            'purple': '#8B46FF',
            'teal-100': '#E6FFFA',
            'teal-200': '#B2F5EA',
            'teal-300': '#81E6D9',
            'teal-400': '#4FD1C5',
            'teal-500': '#14b8a6',
            'teal-600': '#319795',
            'teal-700': '#2C7A7B',
            'red-100': '#fee2e2',
            'red-600': '#dc2626',
            'blue-100': '#dbeafe',
            'green-100': '#dcfce7',
            'green-50': '#F0FDF4',
            'green-200': '#BBF7D0',
            'yellow-100': '#fef9c3',
            'purple-100': '#f3e8ff',
        },

        fontSize: {
            'sm': '12px',
            'base': '14px',
            'xl': '16px',
            'xl2': '18px',
            '2xl': '20px',
            '3xl': '28px',
            '3xl2': '36px',
            '4xl': '38px',
            '5xl': '50px',
            '6xl': '64px',
        },

        extend: {
            fontFamily: {
              inter: ["'Inter'", "sans-serif"],
              gelasio: ["'Gelasio'", "serif"]
            },
        },

    },
    plugins: [],
};