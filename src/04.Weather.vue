<template>
  <div>
    <button class="btn btn-primary" @click="getWeather">현재날씨 가져오기</button>
  </div>
</template>

<script>
import { apiWatchCoords } from './api/api-coords'
// import apiDaily from './api/api-daily'

export default {
  name: 'Weather04',
  data () {
    return {
      lat: 0,
      lon: 0,
      daily: null,
      interval: null
    }
  },
  async created () {
    // const { data } = await apiDaily(this.lat, this.lon)
    // console.log(data)
  },
  methods: {
    async getWeather () {
      setInterval()
      const coords = await apiWatchCoords(true)
      console.log(coords)
      // this.lat = coords.latitude
      // this.lon = coords.longitude
    }
  }
}
</script>

<style lang="scss">

</style>
