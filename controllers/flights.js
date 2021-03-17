const Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports ={
    index,
    show,
    new:newFlight,
    create,
   
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All Flights', flights });
    });
  }

  
  function show(req,res){
    Flight.findById(req.params.id ,function(err ,flight){
      Ticket.find({flight:flight._id}, function(err,tickets){
        console.log(flight ,'i dont know')
        res.render('flights/show' , {title:'Flight Details',flight,tickets})
      });
    });
  }

  
  function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
  }

  function create(req,res){
      console.log(req.body , "this is req.body")
      const flight = new Flight(req.body);
      flight.save(function(err) {
        
        // one way to handle errors
        if (err) {
            console.log(err)
            return res.render('flights/new' , { title: 'Try again, an error accured' })
        };
        
        // for now, redirect right back to new.ejs
        res.redirect('/flights');
      });
    
  }