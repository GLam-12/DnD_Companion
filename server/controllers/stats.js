const {User} = require('../models/char')
const {Char} = require('../models/char')
const {Stat} = require('../models/stat')

module.exports = {
    add_stats:(req, res) => {
        console.log('Here is the req.body', req.body)
        const stats = new Stat()
        stats.strength = req.body.strength
        stats.dexterity = req.body.dexterity
        stats.constitution = req.body.constitution
        stats.intellegence = req.body.intellegence
        stats.wisdom = req.body.wisdom
        stats.charisma = req.body.charisma
        stats.ac = req.body.ac
        stats.initiative = req.body.initiative
        stats.speed = req.body.speed
        stats.health = req.body.health
        stats.save()
        .then(new_stats => {
            console.log('here is the new stats', new_stats)
            Char.findOne({_id: req.params.id}) //We might need to change req.params.id
            .then(char_to_receive_stats => {
                console.log("Here is the char to recieve the char", char_to_receive_stats)
                char_to_receive_stats.stats.push(new_stats)
                char_to_receive_stats.save()
                .then(char_with_stats => {
                    console.log("here is the char with stats", char_with_stats)
                    User.findOne({_id: req.params.id})//We might need to change req.params.id
                    res.json(char_with_stats)
                })
                .catch(err => {
                    console.log('error when creating new char', err)
                    res.json(err)
                })
            })
            .catch(err => {
                console.log('error when creating new char', err)
                res.json(err)
            })
        })
        .catch(err => {
            err.custom_message = "char Name, Type, and Description must be at least 3 characters long"
            console.log('Error when creating new char', err)
            res.json(err)
        })
    },
}