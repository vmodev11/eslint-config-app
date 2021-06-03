_Install eslint_

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

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
