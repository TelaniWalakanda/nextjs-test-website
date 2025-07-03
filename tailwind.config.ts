import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        darkgray: '#231E1E',
        orange: '#FF764D',
        xflo: '#6C62F3',
        ert: '#B91646',
        cardslk: '#43B0FF',
        primary: {
          DEFAULT: '#7d01d4',
        },
      },
      backgroundImage: {
        'hero-background': "url('/frames/hero-background.png')",
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
