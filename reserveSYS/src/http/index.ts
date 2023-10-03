import axios, { type AxiosInstance } from 'axios'

const getApiClient = (options = {}): AxiosInstance => {
  return axios.create({
    baseURL: '/test',
    headers: {
      'Content-type': 'application/json',
       Authorization: 'Bearer ' + sessionStorage.getItem('token'),
       ...options
    }
  })
}

export default getApiClient