export const fetchStart = (name, method, resourceId, meta) => {
  return { type: `FETCH_${methodMap[method]}${name.toUpperCase()}_START`, payload: { resourceId, meta } }
}

export const fetchSuccess = (name, method, response) => {
  return { type: `FETCH_${methodMap[method]}${name.toUpperCase()}_SUCCESS`, payload: response }
}

export const fetchFailure = (name, method, response) => {
  return { type: `FETCH_${methodMap[method]}${name.toUpperCase()}_FAILURE`, payload: response }
}

const methodMap = {
  GET: '',
  POST: 'CREATE_',
  PUT: 'UPDATE_',
  DELETE: 'DELETE_'
}