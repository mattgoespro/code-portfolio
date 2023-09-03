/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  plugins: ["@typescript-eslint"],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
      webpack: {
        config: "./webpack.dev.ts"
      }
    },
    react: {
      version: "detect"
    }
  },
  ignorePatterns: ["src/**/*.[s]css.d.ts", "**/*.html"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true }
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "type", "parent", "sibling"],
        warnOnUnassignedImports: true,
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
          orderImportKind: "asc"
        }
      }
    ]
  },
  env: {
    browser: true,
    es2021: true,
    commonjs: true
  }
};
