# NodeJS Dependency Validator Action
This action checks if JavaScript dependencies are used but missing from package.json file.

## Inputs
### `PATH`

Relative path. Default : `"."`.

### `IGNORE_PACKAGES`

Packages to ignore. Default : `[]`.

### `IGNORE_FILES`

Files to ignore. Default : `[]`.

## Example usage

```yaml
name: Check
runs-on: ubuntu-latest
steps:
  - uses: andrew-hc/nodejs-dependency-validator
    with:
      PATH: "/projects/server"
      IGNORE_PACKAGES:
        - @babel/core
      IGNORE_FILES:
        - .test.js
        - /customfile.js
```
