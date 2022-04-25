const methods = require('./utils/Methods.utils')
const moment = require('moment')

const modules = {
    isEmpty: v => methods.isEmpty(v),
    currentDate: () => moment().format('DD/MM/YYYY')
}

module.exports = modules