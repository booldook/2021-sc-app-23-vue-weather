const apiCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((r) => {
      resolve(r)
    }, (err) => {
      reject(err)
    })
  })
}

const apiWatchCoords = (accuracy = false) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.watchPosition((r) => {
      resolve(r)
    }, (err) => {
      reject(err)
    }, {
      enableHighAccuracy: accuracy
    })
  })
}

export default { apiCoords, apiWatchCoords }
