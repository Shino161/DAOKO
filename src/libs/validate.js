/**
 * @description 验证手机号规则
 */
export const validatePhone = (rule, value, callback) => {
  if (value && !/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)) {
    return callback(new Error('手机号格式不正确'))
  } else {
    callback()
  }
}
/**
 * @description 身份证
 */
export const validateIDCard = (rule, value, callback) => {
  if (value && !/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(value)) {
    return callback(new Error('请输入正确的身份证号'))
  } else {
    callback()
  }
}

/**
 * @description ip
 */
export const validateIP = (rule, value, callback) => {
  if (value && !/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(value)) {
    return callback(new Error('请输入正确的ip'))
  } else {
    callback()
  }
}
