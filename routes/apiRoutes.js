//Dependencies
const fs = require('fs');
let notes = JSON.parse(fs.readFileSync('./db/db.json'));

//Routing
module.exports = (app) => {
    //GET Request
    app.get('/api/notes', (req, res) => {
        res.json(notes)
    });
    //POST Request
    app.post('/api/notes', (req,res) => { 
        let newNote = req.body;
        notes.push(newNote);
        fs.writeFile('./db/db.json', stringData, (err, data) => { 
            if (err) throw err;
        });
        res.send('The new note has been added');
    })
    //DELETE Request
}