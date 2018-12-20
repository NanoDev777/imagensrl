let moment = require('moment')

module.exports = (function (date, outputFormat) {
    return moment(date).locale("es").format(outputFormat)
})