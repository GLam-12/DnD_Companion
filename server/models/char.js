const mongoose = require('mongoose')

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

const Char = new mongoose.model('Char', CharSchema)

module.exports={
    Char : Char,
    CharSchema : CharSchema,
}