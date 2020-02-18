<template>
  <div class="p-8 flex flex-wrap">
    <div class="left w-full md:w-1/4 md:pr-4">
      <h1 class="text-white text-4xl font-hairline">{{ hero.name }}</h1>
      <img
        :src="hero.image.url"
        :alt="hero.name"
        class="object-contain mb-4 rounded"
      />
      <router-link
        to="/"
        class="bg-yellow-500 hover:bg-yellow-700  font-bold py-2 px-4 rounded"
        >Go Back</router-link
      >
    </div>
    <div class="right w-full md:w-3/4 md:pl-4">
      <Table :content="hero.powerstats" title="Power Stats" />
      <Table :content="hero.biography" title="Biography" />
      <Table :content="hero.work" title="Work" />
      <Table :content="hero.appearance" title="Appearence" />
      <Table :content="hero.connections" title="Connections" />
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'

export default {
  name: 'HeroDetails',
  components: {
    Table,
  },
  computed: {
    hero() {
      return this.$store.getters.getHero(this.$route.params.id)
    },
  },
}
</script>
