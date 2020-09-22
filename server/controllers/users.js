const {User} = require('../models/user')

module.exports = {
    all_users:(req, res)=>{
        User.find({}).sort({type: 'asc'})
        .then(all_users => {
            console.log('Here are all the users', all_users)
            res.json(all_users)
        })
        .catch(err => {
            console.log('Error when showing all users', err)
            res.json(err)
        })
    },

    one_user:(req, res) => {
        User.findOne({_id: req.params.id})
        .then(user => {
            console.log('Here is the one user', user)
            res.json(user)
        })
        .catch(err => {
            console.log('Error when showing a single users', err)
            res.json(err)
        })
    },

    add_user:(req, res) => {
        console.log('Here is the req.body', req.body)
        const user = new User()
        user.username = req.body.username
        user.email = req.body.email
        user.password = req.body.password
        user.save()
        .then(new_user => {
            console.log('here is the new user', new_user)
            res.json(new_user)
        })
        .catch(err => {
            err.custom_message = "user Name, Type, and Description must be at least 3 characters long"
            console.log('Error when creating new user', err)
            res.json(err)
        })
    },

    edit_user:(req, res)=> {
        console.log("Here is the edit body", req.body)
        User.findOne({_id: req.params.id})
        .then(user_to_update => {
            console.log('Here is the user to update', user_to_update)
            user_to_update.username = req.body.username
            user_to_update.email = req.body.email
            user_to_update.password = req.body.password
            user_to_update.save()
            .then(updated_user => {
                console.log('here is the Updated user', updated_user)
                res.json(updated_user)
            })
            .catch(err => {
                err.custom_message = "user Name, Type, and Description must be at least 3 characters long"
                console.log('Error from updated user', err)
                res.json(err)
            })
        })
        .catch(err => {
            console.log('Error when editing user', err)
            res.json(err)
        })
    },

    delete_user:(req, res) => {
        User.deleteOne({_id: req.params.id})
        .then(user_to_delete => {
            console.log('Here is the user to delete', user_to_delete)
            res.json(user_to_delete)
        })
        .catch(err => {
            console.log('Error when deleting user', err)
            res.json(err)
        })
    }, 
}