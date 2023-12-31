/* eslint-disable camelcase */
/* eslint-disable quotes */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    screens: {
      xs: "415px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lger: "1152px",
      xl: "1280px",
      xler: "1340px",
      xxl: "1536px",
      "2xl": "1536px",
      "2xler": "1680px",
      "3xl": "1920px",
      lg_1330: "1330px",
      tablet: "845px",
    },
    extend: {
      transitionProperty: {
        width: 'width',
      },
      fontSize: {
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
      },
      backgroundColor: {
        "main-bg": "#FAFAFA",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
        "blue-theme": "#1A97F5",
        "nature-90": "#091E42",
        "nature-80": "#42526E",
        "nature-70": "#5E6C84",
        "nature-60": "#7A869A",
        "nature-30": "#DFE1E6",
        "main-color": "#F06022",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
        "nature-90": "#091E42",
        "nature-80": "#42526E",
        "nature-70": "#5E6C84",
        "nature-60": "#7A869A",
        "nature-30": "#DFE1E6",
        "main-color": "#F06022",
      },
      colors: {
        "nature-90": "#091E42",
        "nature-80": "#42526E",
        "nature-70": "#5E6C84",
        "nature-60": "#7A869A",
        "nature-30": "#DFE1E6",
        "main-color": "#F06022",
      },
      width: {
        400: "400px",
        413: "413px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
      },
    },
  },
  plugins: [],
};