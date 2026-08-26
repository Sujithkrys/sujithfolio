/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0E12',
        surface: '#16171C',
        surface2: '#1C1E24',
        border: '#2A2C34',
        ink: '#E8E6E1',
        muted: '#8A8D96',
        faint: '#5C6370',
        keyword: '#7C9CFF',
        string: '#E8A15E',
        success: '#6FCF97',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
