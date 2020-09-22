const mongoose = require('mongoose')
const {CampaignSchema} = require('./campaign')
const {CharSchema} = require('./char')

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, minlength: 3},
    password: {type: String, required: true, minlength: 8},
    email: {type: String, required: true, minlength: 3},
    campaigns: [CampaignSchema],
    characters: [CharSchema],
    created_at: {type:Date, default: Date.now},
    updated_at: {type:Date, default: Date.now},
})

const User = new mongoose.model('User', UserSchema)


module.exports={
    User : User,
    UserSchema : UserSchema,
}