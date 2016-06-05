import expect from 'expect'
import { createFetch, base, accept, parseJSON } from 'http-client'

const APIUrl = 'localhost:3000'

describe('sayHello', () => {
  it('should say hello to lulala', (done) => {
    const url = '/hello?name=lulala'
    const fetch = createFetch(
      base(APIUrl),  // Prefix all request URLs
      accept('application/json'),
      parseJSON()
    )
    console.log(JSON.stringify(fetch(url)))
    fetch(url)
    .then(response => {
      console.log(response.jsonData)
      done()
    })
  })
})