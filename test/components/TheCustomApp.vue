<template>
  <div>
    <base-button
      v-long-press="150"
      @long-press-start="onLongPressStart"
      @long-press-stop="onLongPressStop"/>
  </div>
</template>
<script lang="ts">
import LongPress from '../../src'
import BaseButton from './BaseButton.vue'

export default {
  name: 'TheCustomApp',
  components: {
    BaseButton
  },
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
