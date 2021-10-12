import axios from 'axios'

const appid = '02efdd64bdc14b279bc91d9247db4722'
const url = 'https://api.openweathermap.org/data/2.5/forecast'
// const icons = ['http://openweathermap.org/img/wn/', '@2x.png']
const params = { units: 'metric', lang: 'kr', appid }

const apiDays = options => {
  params.lang = options.lang || 'kr'
  if (options.id) {
    params.id = options.id
  } else if (options.lat && options.lon) {
    params.lat = options.lat
    params.lon = options.lon
  } else {
    throw new Error('Error')
  }
  return axios.get(url, { params })
}

export default apiDays
