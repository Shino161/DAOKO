import axios from '@/libs/api.request'
const apiPreFix = 'xxxx'
export const get = (params) => {
  return axios.request({
    url: `${apiPreFix}/xxxx/`,
    params,
    method: 'get'
  })
}
export const post = (data) => {
  return axios.request({
    url: `${apiPreFix}/xxxx/`,
    data,
    method: 'post'
  })
}
