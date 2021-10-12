<template>
  <ul>
    <List v-for="v in val" :key="v.dt" :v="v" />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import List from './List.vue'

export default {
  name: 'ListWrap',
  components: { List },
  computed: {
    ...mapGetters(['GET_DAYS']),
    val: function () {
      return Number(this.GET_DAYS.cod) === 200
        ? this.GET_DAYS.list
        : []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
