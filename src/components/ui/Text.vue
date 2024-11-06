<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: {
    type: String,
    required: true,
    validate(props, value) {
      return ['h1', 'h2', 'h3', 'h4', 'p'].includes(value)
    }
  }
})
const classes = computed(() => {
  return {
    h1: 'text-3xl font-bold',
    h2: 'text-2xl font-bold',
    h3: 'text-xl font-semibold',
    h4: 'text-lg font-semibold',
    p: 'mb-3 last:mb-0 leading-normal'
  }[props.as]
})
</script>
<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>
