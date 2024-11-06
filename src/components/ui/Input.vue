<script setup>
import { computed } from 'vue'

const model = defineModel()

const props = defineProps({
  type: { type: String, defaul: 'text' },
  label: String,
  error: String,
  helper: String,
  rows: String,
  placeholder: String,
  options: Array
})

const classes = computed(() => {
  return props.error
    ? 'border-error-400 focus:border-error-500 focus:ring-error-300'
    : 'border-gray-400 focus:border-gray-500 focus:ring-gray-300'
})
</script>
<template>
  <div>
    <label v-if="label" class="block mb-2 text-sm font-medium">
      {{ label }}
    </label>

    <textarea
      v-if="type === 'textarea'"
      v-bind="$attrs"
      v-model="model"
      :type="type"
      :rows="rows"
      class="block w-full focus:ring focus:ring-opacity-50 rounded-md shadow-sm"
      :class="classes"
    />

    <select
      v-else-if="type === 'select'"
      v-model="model"
      class="block w-full focus:ring focus:ring-opacity-50 rounded-md shadow-sm pr-10"
      :class="classes"
    >
      <option disabled selected value="">
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>

    <div v-else class="flex relative">
      <!-- prefix -->
      <div
        v-if="$slots.prefix"
        class="w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
      >
        <slot name="prefix" />
      </div>

      <input
        v-bind="$attrs"
        v-model="model"
        :type="type"
        class="block w-full focus:ring focus:ring-opacity-50 rounded-md shadow-sm"
        :class="[classes, $slots.prefix ? 'pl-10' : '']"
      />
      <!-- suffix -->
      <div
        v-if="$slots.suffix"
        class="absolute inset-y-0 right-2 flex items-center"
      >
        <slot name="suffix" />
      </div>
    </div>
    <p v-if="error" class="text-sm mt-2 text-error-500">
      {{ error }}
    </p>
    <p v-if="helper" class="mt-2 text-sm text-gray-500">
      {{ helper }}
    </p>
  </div>
</template>
