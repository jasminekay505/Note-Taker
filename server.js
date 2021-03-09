//Dependencies
const express = require('express');

//Express Configuration
const app = express();

//Set up Port
const PORT = process.env.PORT || 8080;

//Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Listener
app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});