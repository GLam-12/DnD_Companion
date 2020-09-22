const mongoose = require('mongoose')
const {MonsterSchema} = require('./monster')

const CampaignSchema = new mongoose.Schema({
    name: {type: String},
    player_count: {type: Number},
    description: {type: String},
    dm: {type: String},
    monsters: [MonsterSchema],
})

const Campaign = new mongoose.model('Campaign', CampaignSchema)

module.exports={
    Campaign : Campaign,
    CampaignSchema : CampaignSchema,
}