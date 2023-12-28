module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  semi:'never',
  options:{
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "parser": "flow"
      },
      {
        "comma-dangle": ["error", "always"],
        
    }
    ],
  
  }
};
