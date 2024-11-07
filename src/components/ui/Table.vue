<script setup>
import { CircleSlash2, Loader } from 'lucide-vue-next'

defineProps({
  loading: Boolean,
  empty: Boolean
})
</script>
<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div
      v-if="$slots.header"
      class="w-full flex items-center justify-between py-4"
    >
      <slot name="header" />
    </div>
    <table class="w-full text-sm text-left text-gray-600">
      <thead
        class="text-xs text-gray-800 uppercase bg-gray-200 border-b border-gray-300"
      >
        <tr>
          <slot name="thead" />
        </tr>
      </thead>
      <tbody class="bg-gray-50 border-b">
        <slot name="tbody" />

        <!-- loading -->
      </tbody>
    </table>
    <div v-if="loading" class="text-center py-16">
      <Loader class="size-10 mx-auto animate-spin text-primary-800" />
    </div>
    <div v-if="empty" class="text-center py-16">
      <CircleSlash2 class="size-8 mx-auto mb-4" />
      <p class="text-lg font-semibold">Nenhum registro encontrado</p>
    </div>
  </div>
</template>
