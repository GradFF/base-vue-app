<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: {
    type: String,
    required: true,
    validator(value, props) {
      // The value must match one of these strings
      return ['title', 'title-sm', 'subtitle', 'body', 'body-sm'].includes(
        value
      )
    }
  }
})

const classes = computed(() => {
  return {
    title: 'text-2xl font-bold',
    'title-sm': 'text-xl font-bold',
    subtitle: 'text-lg font-semibold',
    body: 'text-base font-normal',
    'body-sm': 'text-sm font-normal'
  }[props.as]
})

const text = computed(() => {
  return {
    title: 'h1',
    'title-sm': 'h2',
    subtitle: 'h3',
    body: 'p',
    'body-sm': 'p'
  }[props.as]
})
</script>
<template>
  <component :is="text" :class="classes">
    <slot />
  </component>
</template>
