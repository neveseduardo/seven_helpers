const methods = require('../src/utils/Methods.utils')

describe('Modules', () => { 
    it('IsEmpty string', () => { 
        expect(methods.isEmpty('')).toBe(true)
    })
})