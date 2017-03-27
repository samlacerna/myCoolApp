const BaseResponse = require('./base.response')

class SuccessResponse extends BaseResponse {
    constructor() {
        super()
        this.isSuccessful = true
        this.alert.Type = 'success'
        this.alert.message = 'request successful'

    }
}

module.exports = SuccessResponse