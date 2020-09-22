const mongoose = require('mongoose')


const MonsterSchema = new mongoose.Schema({
    name: {type: String},
    ac: {type: Number},
    health: {type: Number},
    description: {type: String},
})

const Monster = new mongoose.model('Monster', MonsterSchema)

module.exports={
    Monster : Monster,
    MonsterSchema : MonsterSchema,
}