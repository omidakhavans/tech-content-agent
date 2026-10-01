import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-sans)'], mono: ['var(--font-mono)'] },
      colors: { ink: '#111318', fog: '#f5f6f8', electric: '#3157ff', mint: '#b6f3d0' },
      boxShadow: { line: '0 1px 0 rgba(17, 19, 24, .08)' },
    },
  },
  plugins: [],
};

export default config;
