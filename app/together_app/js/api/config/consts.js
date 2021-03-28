const baseUrl = "http://api-together.herokuapp.com"

export default {
    url: {
        user: {
            // POST
            SIGN_IN: `${baseUrl}/sign_in`,
            SIGN_UP: `${baseUrl}/sign_up`,
            
            // GET
            GET: `${baseUrl}/user`
        },
        doctor: {
            // PATCH
            EDIT_USER: `${baseUrl}/user`,

            // POST
            VERIFY: `${baseUrl}/doctor/verify`,
            CREATE: `${baseUrl}/doctor`,

            // DELETE
            REMOVE: `${baseUrl}/doctor`
        }
    }
}