**TS import absolute**

_tsconfig.json_

```
{
  "compilerOptions": {
    ...
    "baseUrl": "./",
    "paths": {
      "@src/*": ["src/*"]
    },
  }
}
```

**TS include type**

_tsconfig.json_

```
{
  ...
  "include": ["src"]
}
```

**Work with server dev**

_package.json_

```
{
  ...
  "scripts": {
    "start:dev": "ts-node-dev --files -r tsconfig-paths/register ./src/main.ts",
    ...
  }
}
```
