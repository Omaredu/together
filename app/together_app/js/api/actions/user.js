import axios from 'axios'

import consts from '../config/consts'

// returns { token, errors: [] }
async function signIn(email = "", password = "") {
    let { data } = await axios.post(consts.url.user.SIGN_IN, { 
        email: email.toLocaleLowerCase(), 
        password 
    }, 
    { 
        validateStatus: false 
    })

    return data
}

// returns { errors: [] }
async function signUp(email, password, passwordConfirmation) {
    let { data } = await axios.post(consts.url.user.SIGN_UP, {
        user: {
            email: email.toLocaleLowerCase(),
            password,
            password_confirmation: passwordConfirmation
        }
    }, 
    { 
        validateStatus: false 
    })

    return data
}

/* 
    returns { 
        user { 
            id, 
            email, 
            created_at, 
            updated_at, 
            status: { sick, no_vaccinated, half_vaccinated, vaccinated } || null,
            gender: { male, female } || null,
            name: null,
            avatar: url || null
        } 
    }
*/
async function get(token, userId = null) {
    let { data } = await axios.get(consts.url.user.GET, 
        { 
            validateStatus: false, 
            headers: {
                "Authorization": `Bearer ${token}`
            },
            params: { user_id: userId } 
        }
    )

    return data.user
}

export default {
    signIn,
    signUp,
    get
}