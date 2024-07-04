# React + TypeScript + Vite Project

This project provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd blutech-test-project
   ```

2. **Install dependencies::**

   ```bash
   npm install

   ```

3. **Start the development server:**

   ```bash
   npm run dev

   ```

   #. **File structure:**

   ```css
   ├── public
   │   ├── favicon.ico
   │   └── index.html
   ├── src
   │   ├── components
   │   │   ├── Header.tsx
   │   │   ├── DataTable.tsx
   │   │   └── SearchBar.tsx
   │   ├── context
   │   │   └── ProductContext.tsx
   │   ├── services
   │   │   └── api.ts
   │   ├── App.tsx
   │   ├── main.tsx
   │   └── index.css
   ├── .eslintrc.js
   ├── tsconfig.json
   ├── tsconfig.node.json
   ├── vite.config.ts
   └── package.json
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
