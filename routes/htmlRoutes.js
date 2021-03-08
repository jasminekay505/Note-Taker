//Dependencies
const path = require('path');

//Routing
module.exports = (app) => { 
    //GET Requests
    app.get('/', (req,res) => { 
        res.sendFile(path.join(__dirname, '../index.html'));
    });
    app.get('/notes', (req,res) => { 
        res.sendFile(path.join(__dirname, '../notes.html'));
    });
    //Default
    app.get('*', (req,res) => { 
        res.sendFile(path.join(__dirname, '../index.html'));
    });
}
