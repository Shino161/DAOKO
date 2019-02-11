import axios from '@/libs/api.request'

export const get = (params) => {
  return axios.request({
    url: '/user/info',
    params,
    method: 'get'
  })
}

// PC登录
export const post = (data) => {
  return axios.request({
    url: '/user/info',
    data,
    method: 'post'
  })
}
