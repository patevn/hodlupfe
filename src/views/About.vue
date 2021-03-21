<template>
  <div>
    <h1>Show Data</h1>

  <div
    v-for="data in data"
    :key="data.id"
  >
    {{ data.id }}

  </div>
   <!-- not in use, hook up with routes when nav works
    <div class="actions">
      <router-link
        :to="{ name: 'edit', params: { id: this.$route.params.id } }"
      >
        Edit beer
      </router-link>
    </div> -->
  </div>
</template>

<script>
import { api } from '../api/endpoints'
export default {
  name: 'show',
  components: {

  },
  data () {
    return {
      data: ''
    }
  },
  computed: {

  },
  async mounted () {
    this.data = await api.getAllData()
  }
}
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>
