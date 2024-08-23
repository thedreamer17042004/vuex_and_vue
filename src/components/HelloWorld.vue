<template>
  <div class="app">
    <!-- <h1>{{ $store.state.name }}</h1> -->
    <button type="" @click="updateprofile"></button>
    <h1>{{ name }}</h1>
    
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  computed: {
    ...mapGetters(['name'])
    // no nhat những thuôc tính ở ở store nhặt về để cho ta dùng ở object hiện tại luôn
  },
  methods: {
    ...mapMutations(['setName']),
    ...mapActions(['updateprofile'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
