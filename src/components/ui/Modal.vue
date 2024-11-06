<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue'

import { X } from 'lucide-vue-next'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  maxWidth: {
    type: String,
    default: '2xl'
  },
  closeable: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close'])

watch(
  () => props.show,
  () => {
    if (props.show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = null
    }
  }
)

const close = () => {
  if (props.closeable) {
    emit('close')
  }
}

const closeOnEscape = e => {
  if (e.key === 'Escape' && props.show) {
    close()
  }
}

onMounted(() => document.addEventListener('keydown', closeOnEscape))

onUnmounted(() => {
  document.removeEventListener('keydown', closeOnEscape)
  document.body.style.overflow = null
})

const maxWidthClass = computed(() => {
  return {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl'
  }[props.maxWidth]
})
</script>

<template>
  <teleport to="body">
    <transition leave-active-class="duration-200">
      <div
        v-show="show"
        class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50 flex items-center justify-center"
        scroll-region
      >
        <transition
          enter-active-class="ease-out duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-show="show"
            class="fixed inset-0 transform transition-all"
            @click="close"
          >
            <div class="absolute inset-0 bg-gray-950 opacity-25" />
          </div>
        </transition>

        <transition
          enter-active-class="ease-out duration-300"
          enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            v-show="show"
            class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto w-full"
            :class="maxWidthClass"
          >
            <div v-if="show" class="relative bg-white rounded-lg shadow">
              <!-- Modal header -->
              <div
                :class="$slots.header ? 'border-b border-gray-300 ' : ''"
                class="p-4 rounded-t flex justify-between items-center"
              >
                <div>
                  <slot name="header" />
                </div>

                <button
                  type="button"
                  class="p-2 rounded-md hover:bg-gray-200"
                  @click="close"
                >
                  <X class="w-5" />
                </button>
              </div>
              <!-- Modal body -->
              <div :class="$slots.header ? '' : 'pt-0'" class="p-6">
                <slot name="content" />
              </div>
              <!-- Modal footer -->
              <div
                v-if="$slots.footer"
                class="py-4 px-6 rounded-b border-gray-300 border-t"
              >
                <slot name="footer" />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>
