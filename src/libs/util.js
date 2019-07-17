
export const saveIntoLocal = (key, o) => {
  window.localStorage.setItem(key, JSON.stringify(o))
}

export const loadFromLocal = (key) => {
  if (window.localStorage.getItem(key)) {
    return JSON.parse(window.localStorage.getItem(key))
  }else {
    return ''
  }
}

export const hasRight = (rights, target) => {
  if (!target || rights.includes(target)) {
    return true
  } else {
    return false
  }
}