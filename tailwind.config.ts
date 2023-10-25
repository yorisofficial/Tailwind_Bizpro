import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'primary': '#060640',
      'primary-hover': '#40406E',
      'theme': '#ECF9FF',
      'basic': '#ffffff',
      'basip': '#9090A7',
      'green': '#00E5CC',
      'black': '#000020',

    }
  },
  plugins: [],
}
export default config
