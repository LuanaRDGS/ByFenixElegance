import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,png}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,png}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,png}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "byfenix": "url('/Assets/byfenix.png')",
      },
    },
  },
  plugins: [],
};
export default config;
