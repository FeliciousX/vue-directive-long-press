# Long Press - Vue directive
[![Build Status](https://travis-ci.org/FeliciousX/vue-directive-long-press.svg?branch=master)](https://travis-ci.org/FeliciousX/vue-directive-long-press)

expose long press event on any element or component

## Getting Started

```bash
npm install vue-directive-long-press
```

```vue
<template>
  <button
    v-long-press="300"
    @long-press-start="onLongPressStart"
    @long-press-stop="onLongPressStop">
    Click and Hold for 300ms</button>
</template>
<script>
import LongPress from 'vue-directive-long-press'

export default {
  directives: {
    'long-press': LongPress
  },
  methods: {
    onLongPressStart () {
      // triggers after 300ms of mousedown
    },
    onLongPressStop () {
     // triggers on mouseup of document
    }
  }
}
</script>
```

To use directive globally

```typescript
import Vue from 'vue'
import LongPress from 'vue-directive-long-press'

Vue.directive('long-press', LongPress)
```

## Demo
View and edit the demo at StackBlitz [here](https://stackblitz.com/edit/vue-directive-long-press-demo)!

## Running the tests

```
npm run test
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
