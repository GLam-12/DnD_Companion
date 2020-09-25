const mongoose = require('mongoose')


const CharSchema = new mongoose.Schema({
    name: {type: String},
    class: {type: String},
    background: {type: String},
    level: {type: Number},
    race: {type: String},
    alignment: {type: String},
    experience: {type: String},
    strength: {type: Number},
    dexterity: {type: Number},
    constitution: {type: Number},
    intelligence: {type: Number},
    wisdom: {type: Number},
    charisma: {type: Number},
    ac: {type: Number},
    initiative: {type: Number},
    speed: {type: Number},
    health: {type: Number},
    weapon: {type: String},
    armor: {type: String}
})

const Char = new mongoose.model('Char', CharSchema)

module.exports={
    Char : Char,
    CharSchema : CharSchema,
}