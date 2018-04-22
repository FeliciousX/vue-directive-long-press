<template>
  <div>
    <h1>The page</h1>
    <button
      v-long-press="200"
      @long-press-start="onLongPressStart"
      @long-press-stop="onLongPressStop"
      @click="onClick">The button</button>
  </div>
</template>
<script lang="ts">
import LongPress from '../../src'

export default {
  name: 'TheApp',
  directives: {
    LongPress
  },
  methods: {
    onClick (e) {
      console.log('onClick', e)
    },
    onLongPressStart (e) {
      console.log('onLongPressStart', e)
    },
    onLongPressStop (e) {
      console.log('onLongPressStop', e)
    }
  }
}
</script>
