import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
      },
      colors: {
        roxo: '#8257e6',
      },
    },
  },
  plugins: [],
} satisfies Config
