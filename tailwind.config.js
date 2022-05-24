module.exports = {
  content: ['./*.html',],
  theme: {
    screens:{
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
      '2xl': '1320px',
      '3xl': '1400px',
    },
    fontFamily:{
      'heading':['Sen-Regular', 'sans-serif'],
      'smallHeading':['Poppins-Regular', 'sans-serif'],
      'label' : ['Microsoft Sans Serif', 'sans-serif'],
      'body': ['SegoeUIVF', 'sans-serif'],
    },
    extend: {
      colors:{
        lightGray: '#333333',
        buttonBorder: '#015A97',
        lightFont: '#4D4D4D',
        background: '#E8E8E8',
        label: '#CDD0D4',
        hover: '#2490d8',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontSize:{
        'heading': '46pt',
        'body': '21pt',
      },
    },
  },
  plugins: [
  ],
}
