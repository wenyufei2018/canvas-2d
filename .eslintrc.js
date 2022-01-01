module.exports = {
  root: true,
  extends: [
    "plugin:import/typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  plugins: ["@typescript-eslint", "import", "react", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: [""],
  settings: {
    "import/extensions": [".js", ".ts", ".jsx", ".tsx"],
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true
  },
  rules: {
    "constructor-super": "error",
    "dot-notation": [
      "error",
      {
        allowKeywords: true
      }
    ],
    eqeqeq: ["error", "smart"],
    "import/default": "error",
    "import/export": "error",
    "import/first": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/newline-after-import": "error",
    "import/no-deprecated": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-unresolved": "error",
    "linebreak-style": "error",
    "no-array-constructor": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-boolean-cast": "error",
    "no-func-assign": "error",
    "no-invalid-regexp": "error",
    "no-native-reassign": "error",
    "no-negated-in-lhs": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-path-concat": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-sequences": "error",
    "no-tabs": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "no-void": "error",
    "no-with": "error",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "all",
        ignoreReadBeforeAssign: true
      }
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prettier/prettier": "error",
    radix: "error",
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-string-refs": "error",
    "react/no-unknown-property": "error",
    "react/react-in-jsx-scope": "error",
    "react/self-closing-comp": "error",
    "react/sort-prop-types": "error",
    "spaced-comment": [
      "error",
      "always",
      {
        exceptions: ["-"]
      }
    ],
    "use-isnan": "error",
    "valid-typeof": "error",
    "yield-star-spacing": ["error", "after"],
    yoda: ["error", "never"]
  },
  overrides: [
    {
      files: "**/test/**/*.{js,jsx,ts,tsx}",
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "off"
      }
    },
    {
      files: "**/*.{ts,tsx}",
      rules: {
        "import/named": "off"
      }
    }
  ]
}
