const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
    
}

function newTicket(req, res) {
    Ticket.find({}, function (err, tickets) {
      Flight.findById(req.params.id,function(err,flight){
        console.log(flight, 'flight is here')
        res.render('tickets/new', {
          title: 'Add Ticket', tickets,flight })
      });
    })
  }

function create(req, res) {
  console.log('hiiting here')
  req.body.flight = req.params.id;
  Ticket.create(req.body, function (err, ticket) {
    res.redirect(`/flights/${req.params.id}`);
    
  });
}

function addToFlight(req,res){
  // Flight.findById(req.params.flightId , function(err,flight){
    Flight.findById(req.params.id , function(err,flight){
    // ticket.flight.push(req.body.flightId);
    console.log(flight,'this flight adding ticket')
    ticket.flight.push(req.body);
     ticket.save(function(err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
 }

