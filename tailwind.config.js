tailwind.config = {
  darkMode: 'class',
    theme: {
      extend: {
          gridTemplateColumns: {
            'webApp' : 'repeat(auto-fit, minmax(200px, 1fr))'
          }, 
          fontFamily: {
            Outfit: ["Outfit", "sans-serif"],
              Ovo: ["Ovo", "serif"]
            
          },

          animation : {
            spin_slow: 'spin 6s linear infinite'
          },

          colors: {
            darkThemeBg : '#11001F'
            
    }
  }
},

   // darkMode : 'selector'//
   plugins: [],
}
