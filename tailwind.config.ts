import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        "blob-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(80px, -120px) scale(1.2)" },
          "50%": { transform: "translate(-60px, 60px) scale(0.8)" },
          "75%": { transform: "translate(40px, -40px) scale(1.1)" }
        },
        "blob-2": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "25%": { transform: "translate(-100px, 40px) scale(1.3)" },
            "50%": { transform: "translate(80px, -60px) scale(0.7)" },
            "75%": { transform: "translate(-40px, 100px) scale(1.0)" }
        },
        "blob-3": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "25%": { transform: "translate(120px, 20px) scale(0.8)" },
            "50%": { transform: "translate(-40px, -100px) scale(1.2)" },
            "75%": { transform: "translate(60px, 60px) scale(0.9)" }
        },
        "blob-4": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "25%": { transform: "translate(-60px, -80px) scale(1.1)" },
            "50%": { transform: "translate(100px, 100px) scale(0.9)" },
            "75%": { transform: "translate(-80px, 40px) scale(1.2)" }
        },
        "blob-5": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "25%": { transform: "translate(40px, 140px) scale(1.4)" },
            "50%": { transform: "translate(-100px, -20px) scale(0.6)" },
            "75%": { transform: "translate(20px, -80px) scale(1.0)" }
        },
        "blob-6": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(-160px, 20px) scale(1.2)" },
          "50%": { transform: "translate(20px, -160px) scale(0.8)" },
          "75%": { transform: "translate(-20px, 80px) scale(1.0)" }
        },
        "blob-7": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "25%": { transform: "translate(140px, -60px) scale(0.9)" },
            "50%": { transform: "translate(-60px, 140px) scale(1.3)" },
            "75%": { transform: "translate(100px, -20px) scale(1.0)" }
        },
        "blob-8": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "25%": { transform: "translate(-20px, 180px) scale(0.7)" },
            "50%": { transform: "translate(180px, -20px) scale(1.4)" },
            "75%": { transform: "translate(-80px, -80px) scale(0.9)" }
        },
        "blob-9": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "25%": { transform: "translate(100px, -100px) scale(1.2)" },
            "50%": { transform: "translate(-100px, 100px) scale(0.8)" },
            "75%": { transform: "translate(60px, -60px) scale(1.1)" }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        "blob-1": "blob-1 15s infinite ease-in-out",
        "blob-2": "blob-2 18s infinite ease-in-out",
        "blob-3": "blob-3 22s infinite ease-in-out",
        "blob-4": "blob-4 14s infinite ease-in-out",
        "blob-5": "blob-5 20s infinite ease-in-out",
        "blob-6": "blob-6 17s infinite ease-in-out",
        "blob-7": "blob-7 21s infinite ease-in-out",
        "blob-8": "blob-8 24s infinite ease-in-out",
        "blob-9": "blob-9 16s infinite ease-in-out"
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
