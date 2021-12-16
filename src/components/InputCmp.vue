<template>
  <label class="form-control">
    <slot />
    <input class="input" 
        :type="type" 
        :value="value"
        @input="$emit('input', $event.target.value)">
  </label>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InputCmp',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
})
</script>

<style scoped lang="scss">
</style>