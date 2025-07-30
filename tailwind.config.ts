import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        system: {
          // Updated purple shades
          purple10: "#1e0033",
          purple15: "#29004d",
          purple20: "#3d0073",
          purple30: "#52009a",
          purple40: "#6e00c9",
          purple50: "#8b2fff",
          purple60: "#a964ff",
          purple65: "#b779ff",
          purple70: "#c38dff",
          purple80: "#d5b3ff",
          purple90: "#e9dcff",
          purple95: "#f5efff",

          // Updated green shades
          green10: "#042b18",
          green15: "#084825",
          green20: "#0e6b39",
          green30: "#129b4c",
          green40: "#18c75c",
          green50: "#1fea6b",
          green60: "#52f186",
          green65: "#69f499",
          green70: "#7cf7aa",
          green80: "#a6fbc8",
          green90: "#d2fdea",
          green95: "#ecfef4",
          green100: "#112e22",
        },
      },
    },
  },
  plugins: [],
};

export default config;
