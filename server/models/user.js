const mongoose = require('mongoose')

const StatSchema = new mongoose.Schema({
    strength: {type: Number},
    dexterity: {type: Number},
    constitution: {type: Number},
    intellegence: {type: Number},
    wisdom: {type: Number},
    charisma: {type: Number},
    ac: {type: Number},
    intiative: {type: Number},
    speed: {type: Number},
    health: {type: Number},
})

const CharSchema = new mongoose.Schema({
    name: {type: String},
    class: {type: String},
    background: {type: String},
    level: {type: Number},
    race: {type: String},
    alignment: {type: String},
    experience: {type: String},
    stats: [StatSchema],
    equipment: {type: String}
})

const MonsterSchema = new mongoose.Schema({
    name: {type: String},
    ac: {type: Number},
    health: {type: Number},
    description: {type: String},
})

const CampaignSchema = new mongoose.Schema({
    name: {type: String},
    player_count: {type: Number},
    description: {type: String},
    dm: {type: String},
    monsters: [MonsterSchema],
})

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
const Campaign = new mongoose.model('Campaign', CampaignSchema)
const Monster = new mongoose.model('Monster', MonsterSchema)
const Char = new mongoose.model('Char', CharSchema)
const Stat = new mongoose.model('Stat', StatSchema)


module.exports={
    User : User,
    UserSchema : UserSchema,
    Campaign : Campaign,
    CampaignSchema : CampaignSchema,
    Monster : Monster,
    MonsterSchema : MonsterSchema,
    Char : Char,
    CharSchema : CharSchema,
    Stat : Stat,
    StatSchema : StatSchema,
}