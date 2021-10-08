const apiCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((r) => {
      resolve(r)
    }, (err) => {
      reject(err)
    })
  })
}

export default apiCoords
