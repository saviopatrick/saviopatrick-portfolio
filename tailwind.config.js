/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#050507',
          900: '#09090d',
          850: '#0e0e14',
          800: '#13131b',
          700: '#1c1c28',
        },
        accent: {
          emerald: '#10b981',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-beam': 'borderBeam 6s linear infinite',
      },
      keyframes: {
        borderBeam: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
