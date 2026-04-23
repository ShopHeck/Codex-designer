import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0F1C',
        surface: '#12182A',
        elevated: '#0F1526',
        cyan: '#00D4FF',
        purple: '#7B61FF',
        foreground: '#FFFFFF',
        muted: '#AAB3C5'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
