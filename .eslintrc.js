module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    "standard"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    semi: "off",
    "@typescript-eslint/semi": ["error"],
    indent: 1
  }
};
