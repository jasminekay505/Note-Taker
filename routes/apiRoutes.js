//Dependencies
const fs = require('fs');

//Routing
module.exports = (app) =>  { 
    //GET Request
    app.get('/api/notes', (req, res) =>  { 
        let notes = JSON.parse(fs.readFileSync('../db/db.json'));
        res.json(notes)            
        });
    //POST Request

    //DELETE Request
}