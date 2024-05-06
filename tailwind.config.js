/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green: 'rgba(70, 163, 88, 1)',
        bg_footer: 'rgba(70, 163, 88, 0.1)',
        green_soc: 'rgba(70, 163, 88, 0.6)',
        text_bg: 'rgba(61, 61, 61, 1)',
        welcome: 'rgba(245, 245, 245, 0.5)',
        categoriyes: 'rgba(251, 251, 251, 1)'
      }
    },
    screens: {
      'ml': '200px',
      'sm': '430px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    backgroundImage:{
      'plant': "url('https://vsegda-pomnim.com/uploads/posts/2022-04/1649632083_30-vsegda-pomnim-com-p-listiki-tsvetov-foto-51.jpg')",
      'plant_footer': "url('https://cdn.pixabay.com/photo/2021/08/14/11/38/leaves-6545117_1280.jpg')",
      'plant_would': "url('https://img.flandosales.ru/images/products/1/6445/670382381/700-nw.jpg')"
    }
    },
  
  plugins: [],
}

