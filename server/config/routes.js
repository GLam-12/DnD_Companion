const users = require('../controllers/users')
const chars = require('../controllers/chars')


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

    app.all('*', (req, res) =>{
        res.sendFile(path + '/index.html')
    })
}

