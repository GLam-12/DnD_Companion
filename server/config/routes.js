const users = require('../controllers/users')

module.exports = function(app, path){
    app.get('/', (req, res) =>{

    })

    app.get('/user', (req, res) => {
        users.all_users(req, res)
    })

    app.get('/user/:id', (req, res) => {
        users.one_user(req, res)
    })

    app.post('/user', (req, res) => {
        users.add_user(req, res)
    })

    app.put('/user/:id', (req, res) =>{
        users.edit_user(req, res)
    })

    app.delete('/user/:id', (req, res) => {
        pets.delete_user(req, res)
    })

    app.all('*', (req, res) =>{
        res.sendFile(path + '/index.html')
    })
}

