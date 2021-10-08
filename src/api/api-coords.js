const apiCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((r) => {
      console.log(r)
      resolve(r)
    }, (err) => {
      reject(err)
    })
  })
}

export default apiCoords
