<template>
  <div class="bg-teal-800 min-h-screen">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>
