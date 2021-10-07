<template>
  <header class="header-wrapper">
    <h1 class="logo">
      <BIconCompass class="icon" />
      날씨앱
      <small>v 0.1</small>
    </h1>
    <BBreadcrumb :items="items" />
  </header>
</template>

<script>
import { BIconCompass, BBreadcrumb } from 'bootstrap-vue'

export default {
  name: 'Header',
  components: {
    BIconCompass,
    BBreadcrumb
  },
  data () {
    return {
      items: [
        { text: 'Daily', href: '/' },
        { text: '5Days', href: '/5days' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  @include flex($h: space-between);
  background-color: $dark-color;
  color: $light-color;
  padding: .5em;
  font-size: 1.5em;
}
</style>
