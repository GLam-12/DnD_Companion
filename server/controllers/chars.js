const {Char} = require('../models/char')
const user = require('../models/user')
const { User } = require('../models/user')

module.exports = {

    add_char:(req, res) => {
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
        char.save()
        .then(new_char => {
            console.log('here is the new char', new_char)
            User.findOne({_id: req.params.id})
            .then(user_to_receive_char => {
                console.log("Here is the user to recieve the char", user_to_receive_char)
                user_to_receive_char.characters.push(new_char)
                user_to_receive_char.save()
                .then(user_with_char => {
                    console.log("here is the user with char", user_with_char)
                    res.json(user_with_char)
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

    edit_char:(req, res)=> {
        // Need to figure out logic when other pieces are ready
        console.log("Here is the edit body", req.body)
        User.findOne({_id: req.params.id})
        .then(user_to_update => {
            
            user_to_update.save()
            .then(updated_char => {
                console.log('here is the Updated char', updated_char)
                res.json(updated_char)
            })
            .catch(err => {
                err.custom_message = "char Name, Type, and Description must be at least 3 characters long"
                console.log('Error from updated char', err)
                res.json(err)
            })
        })
        .catch(err => {
            console.log('Error when editing char', err)
            res.json(err)
        })
    },

    // delete_char:(req, res) => {
    //     Char.deleteOne({_id: req.params.id})
    //     .then(char_to_delete => {
    //         console.log('Here is the char to delete', char_to_delete)
    //         res.json(char_to_delete)
    //     })
    //     .catch(err => {
    //         console.log('Error when deleting char', err)
    //         res.json(err)
    //     })
    // }, 

}