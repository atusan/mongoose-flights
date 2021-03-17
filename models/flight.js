var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
	airport: {
		type: String,
		enum: [ 'AUS', 'DAL', 'LAX', 'SAN' ]
	},
	arrival: Date
});


var flightSchema = new Schema({
    airline: {
		type: String,
		enum: ['American', 'Delta', 'Southwest','United']
    },
    flightNo: {
        type: Number,
		min: 10,
		max: 9999
    },
    departs :{
        type: Date,
        default: function () {
            return new Date().getFullYear()+1;
          }
    },
    airport: {
		type: String,
		enum: ['ATL', 'DFW', 'DEN', 'LAX' , 'SAN'],
		default: 'DEN'
	},
	destinations: [ destinationSchema ],
	
});

module.exports = mongoose.model('Flight' , flightSchema);