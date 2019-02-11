
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
