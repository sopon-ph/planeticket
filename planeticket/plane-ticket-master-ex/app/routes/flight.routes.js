module.exports = app => {
    const flight = require("../controller/flight.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    //router.post("/", register.create);

    // Retrieve all Tutorials
    router.get("/get", flight.findAll); 
    router.get('/seat/:id',flight.findSeat);
    router.get('/status/:id',flight.buySeat);
    router.get('/:start/:finish',flight.getOneFlight);

    // Retrieve a single Tutorial with id
    //router.get("/:username/:password", register.findUsername);

    // Update a Tutorial with id
    //router.put("/:id", register.update);

    // Delete a Tutorial with id
    //router.delete("/:id", register.delete);

    app.use('/flight', router);
};