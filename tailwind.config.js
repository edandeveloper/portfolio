/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'void':        '#080c14',
        'panel':       '#0f1826',
        'panel-alt':   '#1a2840',
        'panel-light': '#243550',
        'teal':        '#4ecca3',
        'teal-dim':    '#2a8870',
        'gold':        '#ffd700',
        'gold-dim':    '#aa8e00',
        'red':         '#ff3333',
        'amethyst':    '#c084fc',
        'crystal':     '#60a5fa',
        'stripe-blue': '#1a3a6b',
        'stripe-dark': '#0d1f3c',
        'text-primary': '#e8e8e8',
        'text-dim':    '#8899aa',
        'text-muted':  '#445566',
      },
      fontFamily: {
        mono:    ['"Share Tech Mono"', 'monospace'],
        ui:      ['Rajdhani', 'sans-serif'],
        display: ['Cinzel', 'serif'],
      },
      boxShadow: {
        'glow-teal':     '0 0 10px rgba(78, 204, 163, 0.5), 0 0 20px rgba(78, 204, 163, 0.2)',
        'glow-gold':     '0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.2)',
        'glow-red':      '0 0 10px rgba(255, 51, 51, 0.5)',
        'glow-amethyst': '0 0 10px rgba(192, 132, 252, 0.5), 0 0 20px rgba(192, 132, 252, 0.2)',
        'panel':         'inset 0 1px 0 rgba(78, 204, 163, 0.15), 0 4px 24px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'stripe-pattern': 'repeating-linear-gradient(135deg, #1a3a6b 0px, #1a3a6b 20px, #0d1f3c 20px, #0d1f3c 40px)',
        'scanlines':      'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
      },
      animation: {
        'glow-pulse':   'glowPulse 2s ease-in-out infinite',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'scan':         'scan 8s linear infinite',
        'node-pulse':   'nodePulse 2s ease-in-out infinite',
        'border-flow':  'borderFlow 3s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(78,204,163,0.4), 0 0 16px rgba(78,204,163,0.15)' },
          '50%':      { boxShadow: '0 0 16px rgba(78,204,163,0.7), 0 0 32px rgba(78,204,163,0.3)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        nodePulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,215,0,0.6)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(255,215,0,0)' },
        },
        borderFlow: {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
}
