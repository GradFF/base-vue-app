<script setup>
import { ref } from 'vue'
import { useStore } from '@/stores'

import {
  Text,
  Icon,
  Modal,
  Input,
  Button,
  Dropdown,
  Checkbox,
  DropdownLink
} from '@/components/ui'

const { user } = useStore()

const isOpen = ref(false)

const options = [
  { value: '01', name: 'option 01' },
  { value: '02', name: 'option 02' },
  { value: '03', name: 'option 03' }
]
</script>

<template>
  <div class="container mx-auto">
    <Text as="h1"> Home Page </Text>
    <Text as="p" class="text-sm"> Welcome: {{ user?.name }} </Text>

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
        <template #footer>
          <Button variant="primary">Confimar</Button>
        </template>
      </Modal>
    </div>
    <div class="mt-4 space-y-6">
      <Input type="text" label="Input" />

      <Input label="e-mail" type="email" required />
      <Input label="Bio" type="textarea" rows="5" required />
      <Input
        label="Options"
        type="select"
        :options="options"
        placeholder="Select an option"
      />
      <Input
        placeholder="E-mail"
        label="e-mail"
        type="email"
        required
        error="This is an error"
      />

      <!-- Search -->
      <Input placeholder="Pesquisar">
        <template #prefix>
          <Icon name="Search" clase="size-4" />
        </template>
        <template #suffix>
          <Button variant="primary" sm>Pesquisar</Button>
        </template>
      </Input>
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
