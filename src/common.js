var apiBaseUrl = "http://localhost:3000"

var api = {    
    user : {
        list:`${this.apiBaseUrl}/users`,
        default: `${this.apiBaseUrl}/user`
    },

   
    client : {
        list:`${this.apiBaseUrl}/clients`,
        default: `${this.apiBaseUrl}/client`
    }
}
