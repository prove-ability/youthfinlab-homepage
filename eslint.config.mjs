import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["node_modules/*", ".next/*", "dist/*"],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    },
  },
];

export default eslintConfig;
