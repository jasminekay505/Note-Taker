//Dependencies
const fs = require('fs');
let db = JSON.parse(fs.readFileSync('./db/db.json'));
let id = 1;

//Routing
module.exports = (app) => {
    //GET Request
    app.get('/api/notes', (req, res) => {
        res.json(db)
    });
    //POST Request
    app.post('/api/notes', (req,res) => { 
        let newNote = { 
            id: id++,
            title: req.body.title,
            test: req.body.text
        };
        db.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(db), (err, data) => { 
            if(err) throw err;
        });
        res.send('Your new note was added!');
    })
    //DELETE Request
}