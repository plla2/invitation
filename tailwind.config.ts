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
      borderColor: colors,
      textColor: colors,
      translate: {
        '-1/2': '-50%',
      },
      boxShadow: {
        dropShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)',
      },
      transitionProperty: {
        colors: 'color, background-color, border-color, text-decoration-color',
      },
      backgroundImage: {
        'custom-fade':
          'linear-gradient(0deg, rgba(239, 239, 239, 1) 0%, rgba(239, 239, 239, 0.55) 60%, rgba(239, 239, 239, 0.5) 73%, rgba(239, 239, 239, 0.25) 83%, rgba(239, 239, 239, 0.15) 100%)',
      },
      fontFamily: {
        GmarketBold: ['GmarketBold'],
        GmarketMedium: ['GmarketMedium'],
        GmarketLight: ['GmarketLight'],
        SometimesBold: ['SometimesBold'],
        SometimesMedium: ['SometimesMedium'],
        SometimesLight: ['SometimesLight'],
        Pretendard: ['Pretendard'],
        GowunDodum: ['GowunDodum'],
        Jakarta: ['Jakarta'],
      },
      animation: {
        snow: 'snowflake-fall 10s linear infinite running, snowflake-shake 3s ease-in-out infinite running',
      },
      screens: {
        mb: { max: '389px' },
      },
    },
  },
  plugins: [],
};
export default config;
