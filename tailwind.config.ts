import { colors } from './src/styles/global';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      textColor: {},
      translate: {
        '-1/2': '-50%',
      },
      boxShadow: {
        dropShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)',
      },
      transitionProperty: {
        colors: 'color, background-color, border-color, text-decoration-color',
      },
      fontFamily: {
        GmarketBold: ['GmarketBold'],
        GmarketMedium: ['GmarketMedium'],
        GmarketLight: ['GmarketLight'],
        SometimesBold: ['SometimesBold'],
        SometimesMedium: ['SometimesMedium'],
        SometimesLight: ['SometimesLight'],
        Pretendard: ['Pretendard'],
      },
      animation: {
        snow: 'snowflake-fall 10s linear infinite running, snowflake-shake 3s ease-in-out infinite running',
      },
    },
  },
  plugins: [],
};
export default config;
