const {Campaign} = require('../models/campaign')
const { User } = require('../models/user')


module.exports = {
    all_campaigns:(req, res)=>{
        Campaign.find({}).sort({type: 'asc'})
        .then(campaigns => {
            console.log('Here are all the campaigns', campaigns)
            res.json(campaigns)
        })
        .catch(err => {
            console.log('Error when showing all users', err)
            res.json(err)
        })
    },
    add_campaign:(req, res) => {
        console.log('req.body', req.body)
        console.log('params', req.params)
        User.findOne({_id: req.params.userid})
        .then(user => {
            const campaign = new Campaign()
            campaign.name = req.body.name
            campaign.player_count = req.body.player_count
            campaign.dm = req.body.dm
            campaign.description = req.body.description
            campaign.save()
            .then(new_campaign => {
                console.log('new campaign', new_campaign)
                user.campaigns.push(new_campaign)
                user.save()
                .then(data => res.json(data))
                .catch(err => {
                    console.log('Error when creating new user', err)
                    res.json(err)
                })
            })
            .catch(err => {
                console.log('Error when creating new user', err)
                res.json(err)
            })
        })
        .catch(err => {
            console.log('Error when creating new user', err)
            res.json(err)
        })
    },
    edit_campaign: (req,res) => {
        Campaign.findOne({_id: req.params.id})
        .then(campaign => {
            campaign.name = req.body.name
            campaign.player_count = req.body.player_count
            campaign.dm = req.body.dm
            campaign.save()
            .then(data => {
                User.findOne({_id: req.params.id})
                .then(user_update => {
                    user_update.campaigns.push(data)
                    user_update.save()
                    .then(updated_data => res.json(updated_data))
                    .catch(err => {
                        console.log('Error when creating new user', err)
                        res.json(err)
                    })
                })
                .catch(err => {
                    console.log('Error when creating new user', err)
                    res.json(err)
                })
            })
            .catch(err => {
                console.log('Error when creating new user', err)
                res.json(err)
            })
        })
        .catch(err => {
            console.log('Error when creating new user', err)
            res.json(err)
        })
    },

    one_campaign:(req, res) => {
        Campaign.findOne({_id: req.params.id})
        .then(campaign => {
            console.log('Here is the one campaign', campaign)
            res.json(campaign)
        })
        .catch(err => {
            console.log('Error when showing a single campaigns', err)
            res.json(err)
        })
    },

}