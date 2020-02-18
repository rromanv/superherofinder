<template>
  <div>
    <label class="block px-2 pt-1 md:px-16 md:pt-8">
      <input
        :value="searchItem"
        type="text"
        class="form-input mt-1 block w-full"
        placeholder="Search a Superhero, example: Thor"
        @change="setSearchItem"
      />
    </label>
    <div class="flex flex-col flex-wrap justify-center items-center">
      <PulseLoader v-if="loading" class="mt-4" color="#38B2AC" size="2em" />
      <h1
        v-if="searchItem"
        class="w-full text-center px-4 md:px-16 text-teal-200 font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        <span class="font-hairline">Showing results for</span> "{{
          searchItem
        }}"
      </h1>
      <div v-if="notFound">
        <img :src="notFoundImage" alt="not found" />
      </div>
      <div v-if="searchItem && heroes.length > 0" class="w-full flex flex-wrap">
        <Card
          class="sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
          v-for="hero in heroes"
          :key="hero.id"
          :hero="hero"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Card from '@/components/Card.vue'
import notFoundImage from '../assets/notFound.gif'

export default {
  name: 'Home',
  components: {
    Card,
    PulseLoader,
  },
  data() {
    return {
      notFoundImage,
    }
  },
  computed: {
    searchItem() {
      return this.$store.getters.getSearchItem
    },
    heroes() {
      return this.$store.getters.getHeroes
    },
    loading() {
      return this.$store.getters.isLoading
    },
    notFound() {
      return this.$store.getters.getNotFound
    },
  },
  methods: {
    setSearchItem(event) {
      this.$store.dispatch('setSearchItem', event.target.value)
    },
  },
}
</script>
