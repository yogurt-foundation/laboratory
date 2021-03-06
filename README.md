# Laboratory

> A laboratory for implement and testing Yogurt CSS prototypes.

<p align="left">
  <a href="https://discord.gg/A62YjNR"
     target="_blank">
    <img title="Join the chat at https://discord.gg/A62YjNR"
         src="https://img.shields.io/badge/DISCORD-JOIN_CHANNEL_%E2%86%92-7289da.svg?style=flat">
  </a>
</p>

### _prototypes

- use `background-image` to draw decorative borders,

  - `bg-border` component in `backgrounds` utility,

  ```html
  <!-- Example -->
  <y class="bg-border length-20 space-30 size-12 angle-45">
    ...
  </y>
  ```

- sets animation to an element with duration and delay controllers,

  - `animation` component in `animations` utility,

  ```html
  <!-- Example -->
  <y class="animation blur-in duration-2000 delay-2 infinite">
    ...
  </y>
  ```

- divide each child elements with a bottom border,

  - `dissect` component in `border` utility,

  ```html
  <!-- Example -->
  <y class="dissect-y-2">
    <y>A</y>
    <y>B</y>
    ...
  </y>
  ```

- fix spacing in between the child elements without adding `p-{value}` or `m-{value}` to every each effected elements.

  - `equal` component in `spacing` utility,

  ```html
  <!-- Example -->
  <y class="equal-x-6">
    <y>A</y>
    <y>B</y>
    ...
  </y>
  ```

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
  - `margin` component in `spacing` utility,

  ```html
  <!-- Example -->
  <y class="m-fluid m-min-2 m-max-10">
    ...
  </y>
  ```

and more...

### _build

```bash
# build for testing
$ yarn build

# build for development
$ yarn watch
```

---

[MIT](https://github.com/yogurt-foundation/laboratory/blob/master/LICENSE)
