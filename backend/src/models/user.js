const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')
const consts = require('../config/consts')

const userSchema = new Schema({
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    },
    uid: {
        required: true,
        type: String,
        unique: true
    },
    name: String,
    age: Number,
    gender: Number,
    status: Number,
    lastCheck: Date,
    isDoctor: Boolean,
    profileImage: String
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(consts.SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
})

userSchema.methods.comparePassword = async function (candidate) {
    return bcrypt.compare(candidate, this.password)
}

module.exports = mongoose.model('User', userSchema)