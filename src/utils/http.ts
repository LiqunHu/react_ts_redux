import axios from 'axios'
import { getStoreData } from './storage'

// axios
let axiosConfig = {
  timeout: 50000, // request timeout
}

const http = axios.create(axiosConfig)

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    let token = getStoreData('token')
    if (typeof token === 'string') {
      config.headers['Authorization'] = token
    }
    // config.headers["Authorization"] = 'WEB_66b8fbf0bf0d11e99da725679125a355_0028ddb1b01310b97935f55f8a3d0c80_1578057391186_ab8fc5956322107ab73cadfabf93b0410e1b7ea1';
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export { http }
