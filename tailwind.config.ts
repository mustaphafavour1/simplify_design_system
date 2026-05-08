import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#9753E8',
          'purple-dark': '#7B3FD1',
          'purple-light': '#B47FF0',
          'purple-faint': '#F3EAFD',
          navy: '#1A1464',
          'sidebar-bg': '#0D0820',
          'sidebar-hover': '#1A1040',
          'sidebar-active': '#9753E8',
        },
      },
    },
  },
  plugins: [],
}
export default config
