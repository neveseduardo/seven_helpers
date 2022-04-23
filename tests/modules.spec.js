const methods = require('../src/index')

describe('Modules', () => { 
    it('IsEmpty string', () => { 
        expect(methods.isEmpty('')).toBe(true)
    })
})