# Laboratory

> A laboratory for implement and testing Yogurt CSS prototypes.

### _prototypes

- `Auto-Fluid` concept, allow the utility to set thresholds with min and max value of its' property and determine the values from the screen size thresholds.

  - `font-size` component in `typography` utility,

  ```html
  <!-- Example -->
  <y class="text-fluid text-min-sm text-max-6xl">
    ...
  </y>
  ```
  - `padding` component in `spacing` utility,

  ```html
  <!-- Example -->
  <y class="p-fluid p-min-4 p-max-24">
    ...
  </y>
  ```

### _build

```bash
# build for testing
$ yarn build

# build for development
$ yarn watch
```

---

[MIT](https://github.com/yogurt-foundation/laboratory/blob/master/LICENSE)
