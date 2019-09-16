module.exports = {
  theme: {
    extend: {
      colors: {
        "custom-lighterBlue": "#f0f5ff",
        "custom-blue": "#4892bb",
        "custom-darkerBlue": "#274f64",
        "custom-selectedBlue": "#d0dde4"
      },
      spacing: {
        "68": "17rem",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem"
      },
      maxWidth: {
        "7": "80rem",
        "8": "88rem",
        "9": "96rem",
        "10": "104rem"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: []
};
