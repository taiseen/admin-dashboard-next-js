import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      backgroundColor: {
        'main': '#151c2c',
        'input': '#2c374a',
        'sidebar': '#182237',
      }

    },
  },

  plugins: [],
}
export default config
