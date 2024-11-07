<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: {
    type: String,
    required: true,
    validate(value, props) {
      return ['tr', 'th', 'td'].includes(value)
    }
  }
})

const classes = computed(() => {
  return {
    tr: 'border-b border-gray-300',
    th: 'px-6 py-3',
    td: 'px-6 py-3'
  }[props.as]
})
</script>
<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>
