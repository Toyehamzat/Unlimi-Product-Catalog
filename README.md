# React + TypeScript + Vite Project

This project provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Toyehamzat/unlimi-Product-Catalog.git
   ```

2. **Go to the directory:**

   ```bash
   cd blutech-test-project

   ```

3. **Install dependencies::**

   ```bash
   npm install

   ```

4. **Start the development server:**

   ```bash
   npm run dev

   ```

tech-test-project

````

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
// other rules...
parserOptions: {
 ecmaVersion: "latest",
 sourceType: "module",
 project: ["./tsconfig.json", "./tsconfig.node.json"],
 tsconfigRootDir: __dirname,
},
};
````

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
