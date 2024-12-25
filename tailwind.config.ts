import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        roxo: "#8257e6",
      },
    },
  },
  plugins: [],
} satisfies Config;
