import axios, { type AxiosInstance } from 'axios'

const getApiClient = (options = {}): AxiosInstance => {
  return axios.create({
    baseURL: 'http://localhost:8081/api',
    headers: {
      'Content-type': 'application/json',
       Authorization: 'Bearer ',
       ...options
    }
  })
}

export default getApiClient