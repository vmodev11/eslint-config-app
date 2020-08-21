_Install eslint_

`yarn add eslint -D`

_Create eslint config file_

`node_modules/.bin/eslint --init`

_Install airbnb typescript_

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin eslint-plugin-import -D
```

_Create prettier config file_

```
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 120
}
```

_Update eslint config file_

```
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["airbnb-typescript/base", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint/eslint-plugin", "import"],
  "rules": {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/newline-after-import": "error",
    "curly": ["error", "all"]
  }
}
```

_Update npm script_

`"lint": "eslint \"{src,test}/**/*.ts?(x)\""`

_Auto lint_

```
yarn add husky@^4 lint-staged -D
```

_Update package.json_

```
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix"
    ]
  }
  ...
}
```
