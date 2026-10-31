import type { Config } from 'tailwindcss';
import defaultColors from 'tailwindcss/colors';

// Tema hitam-putih: semua palet warna dipetakan ke skala abu-abu netral.
const neutral = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0a0a0a'
};

// Palet "aksen" (dulu berwarna) jadi putih -> abu terang supaya tombol, ikon, dan progress tetap menonjol di latar hitam.
const accent = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#e5e5e5',
  400: '#ffffff',
  500: '#d4d4d4',
  600: '#a3a3a3',
  700: '#737373',
  800: '#404040',
  900: '#262626',
  950: '#171717'
};

const accentNames = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
];

// Warna semantik: hanya dipakai untuk peringatan, bahaya, catatan, dan status berhasil.
const colors: Record<string, Record<number, string>> = {
  slate: neutral,
  danger: defaultColors.rose,
  warn: defaultColors.amber,
  info: defaultColors.sky,
  success: defaultColors.emerald
};
accentNames.forEach((name) => {
  colors[name] = accent;
});

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: { extend: { colors } },
  plugins: []
};
export default config;
