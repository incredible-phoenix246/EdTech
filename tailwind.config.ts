import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4221B0',
        'primary-light': '#684DC0',
        'primary-dark': '#4221B0',
        'color-600': '#161616',
        'color-normal': '#535353',
        header: '#282828',
        card: '#FBF9FA',
        checked: '#2E577D',
        test: '#2e5773',
        disabled: '#868E96',
        white: '#ffffff',
        hover: '#9fb2c3',
        success: '#008031',
        'success-hover': '#8acba3',
        error: '#FF0000',
        active: '#EAEEF2'
      }
    }
  },
  plugins: []
};
export default config;
