<script setup>
import { computed } from 'vue'
import Icon from './Icon.vue'

const props = defineProps({
  to: [String, Object],
  loading: Boolean,
  icon: Boolean,
  variant: {
    type: String,
    default: 'base',
    validator(value, props) {
      // The value must match one of these strings
      return ['base', 'primary', 'outline'].includes(value)
    }
  }
})

const classes = computed(() => {
  return {
    base: 'hover:bg-gray-200 focus:ring-gray-300',
    primary: 'text-white bg-gray-800 hover:bg-gray-700 focus:ring-gray-300',
    outline:
      'bg-transparent border border-gray-500 hover:bg-gray-200 focus:ring-gray-300'
  }[props.variant]
})
</script>
<template>
  <component
    :is="to ? 'RouterLink' : 'button'"
    :class="[classes, icon ? 'px-2' : 'px-4']"
    class="inline-flex items-center justify-center py-2 text-sm font-medium tracking-wide capitalize rounded hover:shadow-lg transition-all duration-200 transform outline-none focus:active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed focus:ring-2 focus:ring-opacity-50"
  >
    <Icon v-if="loading" name="Loader" class="size-5 animate-spin" />
    <slot v-else />
  </component>
</template>
