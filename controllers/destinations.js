const Flight = require('../models/flight');

module.exports = {
    create
}

// Create teh create function 
function create(req, res){
    // 1. Find the movie (get the id with req.params.id)
    Flight.findById(req.params.id, function(err, flight){
        console.log(flight, ' create review flight')
        flight.destinations.push(req.body);
        // when we mutate a document ^
        // we have to save it
        flight.save(function(err){
            console.log(flight)
            res.redirect(`/flights/${flight._id}`)
        })
    })
}