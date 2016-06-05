import expect from 'expect'
import { moduleFunction } from '../src'
import { utilFunction } from '../utils'

describe('generate tests', () => {
  describe('runs test', () => {
    expect(moduleFunction('aaa')).toEqual('aaa')
    expect(utilFunction('aaa')).toEqual('aaa')
  })
})