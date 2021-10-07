<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/inc/Header.vue'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style lang="scss">

</style>
