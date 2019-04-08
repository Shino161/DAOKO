import config from '@/config'
export  const uploadActionUrl = process.env.NODE_ENV === 'development' ?
  config.fileBaseUrl.dev + config.ossUrl.dev : config.fileBaseUrl.pro + config.ossUrl.pro
export  const fileBaseUrl = process.env.NODE_ENV === 'development' ?
  config.fileBaseUrl.dev : config.fileBaseUrl.pro
