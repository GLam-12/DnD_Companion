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

const Stat = new mongoose.model('Stat', StatSchema)

module.exports={
    Stat : Stat,
    StatSchema : StatSchema,
}