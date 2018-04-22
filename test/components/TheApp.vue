<template>
  <div>
    <h1>The page</h1>
    <button
      v-long-press="150"
      @long-press-start="onLongPressStart"
      @long-press-stop="onLongPressStop">The button</button>
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
    onLongPressStart (e) {
      this.$emit('long-press-start', e)
    },
    onLongPressStop (e) {
      this.$emit('long-press-stop', e)
    }
  }
}
</script>
