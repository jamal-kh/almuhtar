// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  // 1. Ignore build outputs
  {
    ignores: ["dist", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },

  // 2. Merge Next.js presets
  ...nextVitals,
  ...nextTs,

  // 3. TypeScript + React Hooks + React Refresh setup
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Base recommended rules
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // React Fast Refresh (for Next.js dev)
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // TypeScript-specific adjustments
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
]);
