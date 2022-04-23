const methods = {
    isEmpty: v => {
        try {
            if (v === undefined) return true
            if (v === null) return true
            if (v === '') return true
            if (v === Object(v) && !Boolean(Object.entries(v).length))
                return true
            return Array.isArray(v) && !Boolean(v.length)
        } catch (error) {
            throw new Error(error)
        }
     }
}

module.exports = methods