<script setup>
import Text from '@/components/Text.vue'
import { useStore } from '@/stores'
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
import Dropdown from '@/components/Dropdown.vue'
import DropdownLink from '@/components/DropdownLink.vue'
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import Input from '@/components/Input.vue'
import Checkbox from '../components/Checkbox.vue'

const { user } = useStore()

const isOpen = ref(false)
</script>

<template>
  <div class="container mx-auto">
    <Text as="title"> Home Page </Text>
    <Text as="body"> Welcome: {{ user?.name }} </Text>

    <div class="flex space-x-4 mt-4">
      <Button>base</Button>
      <Button variant="primary">primary</Button>
      <Button variant="outline">outline</Button>
      <Button icon>
        <Icon name="Menu" class="size-5" />
      </Button>
      <Button variant="outline" icon>
        <Icon name="Menu" class="size-5" />
      </Button>
    </div>

    <div class="mt-4">
      <Dropdown align="left">
        <template #trigger>
          <Button type="button" icon>
            <Icon name="Menu" class="size-5" />
          </Button>
        </template>
        <template #content>
          <DropdownLink to="/">Home</DropdownLink>
          <DropdownLink>Logout</DropdownLink>
        </template>
      </Dropdown>
    </div>

    <div class="mt-4">
      <Button type="button" @click="isOpen = true" variant="primary"
        >Open Modal</Button
      >

      <Modal :show="isOpen" @close="isOpen = false">
        <template #header>
          <Text as="subtitle">Base Modal</Text>
        </template>
        <template #content>
          <Text as="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            similique porro debitis deserunt, molestias quod ipsa facere cumque
            laboriosam placeat ut pariatur earum officia alias in, aperiam
            blanditiis sed necessitatibus.
          </Text>
        </template>
      </Modal>
    </div>
    <div class="mt-4">
      <Input type="text" label="Input" />
    </div>
    <div class="mt-4">
      <Checkbox
        id="chack"
        label="Label"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  </div>
</template>
