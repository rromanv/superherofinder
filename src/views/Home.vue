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
      <h1
        v-if="searchItem"
        class="w-full text-center px-4 md:px-16 text-teal-200 font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        <span class="font-hairline">Showing results for</span> "{{
          searchItem
        }}"
      </h1>
      <div class="w-full flex flex-wrap">
        <Card class="w-1/4 p-2" v-for="n in 10" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card,
  },
  computed: {
    searchItem() {
      return this.$store.getters.getSearchItem
    },
  },
  methods: {
    setSearchItem(event) {
      this.$store.dispatch('setSearchItem', event.target.value)
    },
  },
}
</script>
