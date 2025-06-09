<template>
   <div>
    <Loader v-if="loading" />
    <div v-else id="app">
      <!-- Your actual content -->
      <router-view />
    </div>
  </div>
  <!-- <div id="app">
    <router-view />
  </div> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Loader from './views/Loader.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000) // Simulate loading delay
})
</script>