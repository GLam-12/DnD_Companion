const users = require('../controllers/users')
const chars = require('../controllers/chars')
const campaigns = require('../controllers/campaigns')
const monsters = require('../controllers/monsters')


module.exports = function(app, path){
    app.get('/', (req, res) =>{

    })

    app.get('/user', (req, res) => {
        users.all_users(req, res)
    })

    app.get('/user/:id', (req, res) => {
        users.one_user(req, res)
    })

    app.post('/login', (req, res) =>{
        users.login(req, res)
    })

    app.post('/user', (req, res) => {
        users.add_user(req, res)
    })

    app.put('/user/:id', (req, res) =>{
        users.edit_user(req, res)
    })

    app.delete('/user/:id', (req, res) => {
        users.delete_user(req, res)
    })

    app.post('/newchar/:id', (req,res) => {
        chars.add_char(req,res)
    }) 

    app.get('/show_characters', (req,res) => {
        chars.all_characters(req,res)
    })

    app.post('/new_campaign/:userid', (req,res) => {
        campaigns.add_campaign(req,res)
    })

    app.get('/get_character/:id', (req,res) => {
        chars.one_character(req,res)
    })
    
    app.get('/show_campaigns', (req,res) => {
        campaigns.all_campaigns(req,res)
    })

    app.get('/get_campaign/:id', (req,res)=>{
        campaigns.one_campaign(req,res)
    })

    app.post('/new_monster/:userid', (req,res) => {
        monsters.add_monster(req,res)
    })

    app.get('/show_monsters', (req,res) => {
        monsters.all_monsters(req,res)
    })
    
    app.all('*', (req, res) =>{
        res.sendFile(path + '/index.html')
    })

}

