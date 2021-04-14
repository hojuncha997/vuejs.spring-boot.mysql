import axios from 'axios'

export default {
  /**
   * Register a new user
   * @param {Object} detail registration detail
   */

  //  레지스터 기능
  register (detail) {
    return new Promise((resolve, reject) => {
      axios.post('/registrations', detail).then(( {data} ) => {
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
