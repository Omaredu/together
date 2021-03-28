import axios from 'axios'

import consts from '../config/consts'

// returns { token, errors: [] }
async function create(token) {
    let { data } = await axios.post(consts.url.doctor.CREATE, null,
        { 
            validateStatus: false, 
            headers: {
                "Authorization": `Bearer ${token}`
            } 
        }
    )

    return data
}

// returns { errors: [] }
async function editUser(token, userId, { name = null, avatar = null, status = null, gender = null, age = null }) {
    let form = new FormData()

    if (name) form.append("name", name)
    form.append("user_id", userId)

    if (avatar) {
        let filename = avatar.split('/').pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        form.append("avatar", { type, uri: avatar, name: filename })
    }

    if (status) form.append("status", status)
    if (gender) form.append("gender", gender)
    if (age) form.append("age", age)
    
    console.log(form)
    
    let { data } = await axios.patch(consts.url.doctor.EDIT_USER, form,
        { 
            validateStatus: false, 
            headers: {
                "Authorization": `Bearer ${token}`
            } 
        }
    )

    return data
}

export default {
    create,
    editUser
}