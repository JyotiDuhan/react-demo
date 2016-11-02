import axios from 'axios'

const defaultHeaders = {
  'Content-Type': 'application/json',
}

export function get (reqObj) {
  if (reqObj !== Object(reqObj)) {
    return false
  }

  if (!reqObj.url) {
    return false
  }

  reqObj.headers = reqObj.headers || {}

  return axios({
    method: 'get',
    url: reqObj.url,
    params: reqObj.payload,
    headers: {
      ...defaultHeaders,
      ...reqObj.headers,
    },
  })
}
