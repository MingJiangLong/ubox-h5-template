
import Axios from 'axios'

const axios = Axios.create({
  timeout: 1000 * 6,
  withCredentials: true,
})


axios.interceptors.request.use((config) => {

  return config
})

axios.interceptors.response.use(undefined, (error) => {
  return error
})
