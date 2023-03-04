import Jasmine from 'jasmine'
const jasmine = new Jasmine()
jasmine.loadConfigFile('spec/support/jasmine.json')

describe('A suite', function () {
  it('contains spec with an expectation', function () {
    expect(true).toBe(false)
  })
})

jasmine.execute()
console.log('hola desde jasmine')
