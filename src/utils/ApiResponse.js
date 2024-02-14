class ApiResponse {
    constructor(statusCode , Data , message){
        this.statusCode = statusCode
        this.Data = Data
        this.message = message
        this.success = statusCode < 400
    }
}

export {ApiResponse}