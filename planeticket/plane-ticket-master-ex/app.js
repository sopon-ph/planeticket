const expressFunction = require('express');
const expressApp = expressFunction();
const bodyParser = require("body-parser");
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:4200"
};


expressApp.use(cors(corsOptions));


expressApp.use(bodyParser.json());

expressApp.use(bodyParser.urlencoded({ extended: true }));

// expressApp.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Options, Authorization')
//     return next();
// });

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });



require("./app/routes/register.routes")(expressApp);
expressApp.listen(3000, function() {
    console.log('Listening on port 3000');
});