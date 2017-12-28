import Promise from 'bluebird'

const requestAsync = Promise.promisify(require('request'))
const HttpMethods = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete'
}

export {requestAsync as request, HttpMethods}
