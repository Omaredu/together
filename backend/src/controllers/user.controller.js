const router = require('express').Router()
const { User } = require('../models')
const response = require('../response')

const cryptoRandomString = require('crypto-random-string')

router.post('/', async (req, res) => {
    const { email, password } = req.body
    try {
        const newUser = new User({
            email,
            password,
            uid: cryptoRandomString({ type: 'url-safe', length: 10 })
        })
    
        const createdUser = await newUser.save()
        response(res, 201, {
            message: "User successfully created",
            data: createdUser
        })
    } catch (err) {
        console.log(err)
        response(res, 201, {
            message: "Email already registered"
        })
    }
})

router.get('/:uid', async (req, res) => {
    let foundUser = await User.findOne({ uid: req.params.uid }).select("-password")

    if (!foundUser) {
        response(res, 404, {
            message: "Requested user not found"
        })
    } else {
        response(res, 200, {
            message: "User successfully found",
            data: foundUser
        })
    }
})

router.post('/login', async (req, res) => {
    let foundUser = await User.findOne({ email: req.body.email })
    if (!foundUser) {
        response(res, 404, {
            message: "Requested user not found"
        })
    } else {
        if (await foundUser.comparePassword(req.body.password || "")) {
            response(res, 200, {
                message: "Succesfully logged in",
                data: foundUser
            })
        } else {
            response(res, 200, {
                message: "Invalid password"
            })
        }
    }
})

module.exports = router