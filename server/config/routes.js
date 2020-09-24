const users = require('../controllers/users')
const stats = require('../controllers/stats')
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
    
    app.post('/new_campaign/:userid', (req,res) => {
        campaigns.add_campaign(req,res)
    })
    
    app.post('/new_monster/:userid', (req,res) => {
        monsters.add_monster(req,res)
    })
    
    app.all('*', (req, res) =>{
        res.sendFile(path + '/index.html')
    })

}

