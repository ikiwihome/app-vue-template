import animate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue", 
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        beige: "#F5F5DC",
        "light-gray": "#F3F4F6",
        "dark-gray": "#374151",
        primary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8"
        },
        secondary: {
          DEFAULT: "#6B7280",
          light: "#9CA3AF",
          dark: "#4B5563"
        },
        theme: {
          white: "#FFFFFF",
          offwhite: "#F5F5F5",
          lightgray: "#E5E7EB",
          darkgray: "#1F2937"
        }
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in-up": {
          from: {
            opacity: 0,
            transform: "translateY(20px)"
          },
          to: {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out"
      },
    },
  },
  plugins: [animate],
}
