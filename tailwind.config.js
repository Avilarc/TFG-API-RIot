// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.{js,ts,jsx,tsx}",
      "./resources/**/*.vue",
    ],
    options: {
      safelist: ['bg-black'],
    },
  },
  theme: {
    extend: {
      colors: {
        fondoWeb: '#333333',
        texto: '#FAF9F6',
        secciones: '#2A3D66',
        enfasis1: '#D32F2F',
        enfasis2: '#6A1B9A',
        breath1: '#FF7F50',  // Color 1 para la animación
        breath2: '#1E90FF',  // Color 2 para la animación
        neonPink: '#FF00FF', // Color neón rosa
        neonBlue: '#00FFFF', // Color neón azul
      },
      fontFamily: {
        'titulo': ['Merriweather', 'serif'],
        'parrafo': ['Roboto', 'sans-serif']
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
        'breathing-bg': 'breathing-bg 5s ease-in-out infinite',
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'breathing-bg': {
          '0%, 100%': { backgroundColor: 'var(--tw-color-breath1)' },
          '50%': { backgroundColor: 'var(--tw-color-breath2)' },
        },
        'neon-glow': {
          '0%, 100%': {
            textShadow: '0 0 5px var(--tw-color-neon-pink), 0 0 10px var(--tw-color-neon-pink), 0 0 20px var(--tw-color-neon-pink), 0 0 40px var(--tw-color-neon-blue), 0 0 80px var(--tw-color-neon-blue), 0 0 120px var(--tw-color-neon-blue)',
          },
          '50%': {
            textShadow: '0 0 10px var(--tw-color-neon-blue), 0 0 20px var(--tw-color-neon-blue), 0 0 40px var(--tw-color-neon-pink), 0 0 80px var(--tw-color-neon-pink), 0 0 120px var(--tw-color-neon-pink)',
          },
        },
      },
      backgroundImage: theme => ({
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'registro-fondo': "url('/public/irelia-register.webp')",
        'login-fondo': "url('/public/ashein-login.png')", 
        'detalles-fondo': "url('/public/Historial.webp')",
      }),
      backgroundSize: {
        '200%': '200% 200%',
        'cover': 'cover',
      },
      spacing: {
        '104': '26rem', // 384px, valor añadido para mayor ancho del formulario
      },
    },
  },
  plugins: [],
}
