const mongoose = require('mongoose')

var hallReservationSchema = mongoose.Schema( {
    membershipId : {
        type : mongoose.Types.ObjectId,
        required : true
    },
    dateOfReservation : {
        type : Date,
        required : true
    },
    verificationDoc: {
        type : String,
        required : true
    },
    purpose : {
        type : String,
        required : true
    }
});

const hallReservation = mongoose.model('hallReservation', hallReservationSchema);

module.exports = hallReservation;