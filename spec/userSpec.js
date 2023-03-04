
import app from '../src/index.js'
import axios from 'axios'
const {PORT}= process.env
const newUser = {

  name: 'testted sister',
  username: 'testdev',
  email: 'ttss@hotmail.es',
  password: '1234512'

}

describe('creating an user', function () {
  it('contains spec with an expectation', function (done) {
    axios.post(`http://localhost:${PORT}/api/user`, newUser).then((response) => {
        console.log(response.headers['content-type'])
        expect(response.status).toBe(200)
        /* expect */
        done()
     })
  })
})

console.log('hola desde jasmine')
