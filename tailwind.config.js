const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: process.env.NEXT_PUBLIC_STAGE !== "dev",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: ["bg-purple-500", "bg-gray-500", "bg-yellow-500", "bg-pink-500"],
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      ringColor: ["hover"],
      opacity: ["disabled"],
      zIndex: ["hover"],
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fontWeight: {
      thin: 100,
      light: 300,
      medium: 400,
      bold: 700,
      extrabold: 900,
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      primary: "#d9d9d9",
      secondary: "#f15927",
      danger: "#e3342f",
    }),
    flexGrow: {
      0: 0,
      DEFAULT: 1,
      2: 2,
    },
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "9/10": "90%",
      mdMax: "1024px",
      xxlMax: "1536px",
      max: "120rem",
    },
    extend: {
      screens: {
        xxs: "300px",
        xs: "350px",
      },
      colors: {
        "ss-orange": "#f15927",
        "ss-orange-100": "#ff8352",
        "ss-orange-200": "#ff7254",
        "ss-orange-contrast": "#9072f1",
        "ss-highlight": "#FDF6F1",
        "ss-blue": "#27bff1",
        lavender: "#e4eaf1",
        "ghost-white": "#f4f8fb",
        fb: "#4167b2",
        orange: colors.orange,
        cyan: colors.cyan,
        green: {
          340: "#bfffc3",
          350: "#08cd04",
          360: "#7ed56f",
          370: "#28b485",
          380: "#7ed957",
          850: "#23a44e",
        },
        yellow: {
          350: "#fdde9e",
          850: "#ab6600",
        },
      },
      boxShadow: {
        "outer-md":
          "0 4px 6px 6px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "ss-orange-md": "0 0 0 2px rgb(241 89 39 / 20%)",
      },
      fontSize: {
        sm: ["14px", "18px"],
        base: ["18px", "22px"],
        lg: ["20px", "24px"],
        xl: ["24px", "28px"],
        16: ["16px", "20px"],
      },
      backgroundColor: ["group-hover"],
      animation: {
        bounceLeft: "bounceLeft 1s infinite",
      },
      keyframes: {
        bounceLeft: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
};
