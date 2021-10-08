import axios from 'axios'

const appid = '02efdd64bdc14b279bc91d9247db4722'
const url = 'https://api.openweathermap.org/data/2.5/weather'
// const icons = ['http://openweathermap.org/img/wn/', '@2x.png']
const params = { units: 'metric', appid }

const apiDaily = (lat, lon) => {
  params.lat = lat
  params.lon = lon
  return axios.get(url, { params })
}

export default apiDaily
