import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        priority: {
          p1: '#DC2626',
          p2: '#2563EB',
          p3: '#F59E0B',
        },
      },
    },
  },
  plugins: [],
};
export default config;
