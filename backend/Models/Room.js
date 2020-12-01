const mongoose = require('mongoose')

var roomSchema = mongoose.Schema( {
    roomNo : {
        type : Number,
        required : true
    },
    reserved: [
        {
            from: String,
            to: String
        }
    ]
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;