import expect from 'expect'
import { createFetch, base, accept, parseJSON } from 'http-client'

const rootUrl = 'http://localhost:3000'

describe('sayHello', () => {
  let fetch
  beforeEach(() => {
    fetch = createFetch(
      base(rootUrl),  // Prefix all request URLs
      accept('application/json'),
      parseJSON()
    )
  })
  it('should say hello to luhaha by default', (done) => {
    fetch('/hello')
    .then(response => {
      const { status, jsonData: { message } } = response
      expect(status).toEqual(200)
      expect(message).toEqual('Hello, luhaha')
      done()
    })
  })
  it('should say hello to lulala', (done) => {
    fetch('/hello?name=lulala')
    .then(response => {
      const { status, jsonData: { message } } = response
      expect(status).toEqual(200)
      expect(message).toEqual('Hello, lulala')
      done()
    })
  })
})