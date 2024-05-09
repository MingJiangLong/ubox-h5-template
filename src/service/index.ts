
import Axios from 'axios'

const axios = Axios.create({
  timeout: 1000 * 6,
})


axios.interceptors.request.use((config) => {

  return config
})

axios.interceptors.response.use(undefined, (error) => {
  return error
})
