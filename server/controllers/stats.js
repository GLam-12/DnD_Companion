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
            console.log('Here is the req.body', req.body)
            const char = new Char()
            char.name = req.body.name
            char.class = req.body.class
            char.background = req.body.background
            char.level = req.body.level
            char.race = req.body.race
            char.alignment = req.body.alignment
            char.experience = req.body.experience
            char.equipment = req.body.equipment
            char.stats.push(new_stats)
            char.save()
            .then(char_with_stats => {
                console.log("here is the char with stats", char_with_stats)
                User.findOne({_id: req.params.id})//We might need to change req.params.id
                .then(user_to_update_with_char => {
                    console.log("Here is the user with updated char", user_to_update_with_char)
                    user_to_update_with_char.characters.push(char_with_stats)
                    user_to_update_with_char.save()
                    .then(user_with_new_char => {
                        console.log("here is the user with new char", user_with_new_char)
                        res.json(user_with_new_char)
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