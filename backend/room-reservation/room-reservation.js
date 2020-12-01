const e = require('express');
var express = require('express');
var mongoose = require('mongoose');

app = express();

mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect('mongodb+srv://test:test@cluster0.tfqi1.mongodb.net/room-reservation',{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false })
    .then(console.log('Connected to database "room-reservation"'))
    .catch((err) => {console.log(err)})

app.use(express.json())

const roomReservation = require('../Models/Room-reservation')
const Room = require('../Models/Room')


//ROOM RESERVATION
//methods: ADD, GET, UPDATE, DELETE

//Get all reservation
app.get('/room', (req, res) =>{
    roomReservation.find({})
        .then((member) => res.send(member))
        .catch((err) => console.log(err))
})

//Get reservation by id
app.get('/room/:id', (req, res) =>{
    roomReservation.find({ _id : req.params.id})
        .then((reservation) => res.send(reservation))
        .catch((err) => console.log(err))
})

//find room available
//http://localhost:3500/available?start=2018-01-01&&end=2018-12-31
app.get('/available', (req, res) =>{
    const matchStart = new Date(req.query.start)
    const matchEnd = new Date(req.query.end)
    let roomAvailable = 0
    roomReservation.find({ checkInDate : {"$gt": matchStart}})
        .then((reservation) => {
            room =0;
            console.log(reservation[0])
            //iterate for the number of rooms in the hotel
            for (i =1; i<=20; i++){
                //for every element in the reservation details obtained
                for(j = 0; j< reservation.length; j++) {
                    //check whether the room number matches to 'i'
                    //if yes check for the condition
                    if( reservation[j].roomNo === i){
                        if(matchStart < element.checkOutDate || matchEnd < element.checkOutDate){
                            
                            break;
                        }
                    }
                    else{
                        //if the room number doesnot match with 'i' then set the value of room to 'i' and go for the next iteration of the second for loop
                        room = i;
                        break;
                    }
                }
            }
            res.send(`${room}`)
        })
        .catch((err) => console.log(err))
   
})

//add a member(POST)
app.post('/room', (req, res) =>{
    (new roomReservation ( {
        "membershipId" : req.body.membershipId, 
        "noOfChildren" : req.body.noOfChildren,
        "noOfAdults" : req.body.noOfAdults,             
        "checkInDate" : req.body.checkInDate,
        "checkOutDate" : req.body.checkOutDate,
        "roomNo" : req.body.roomNo,
        "verificationDoc" : req.body.verificationDoc,
        "additionalRequirements" : req.body.additionalRequirements
}))
        .save()
        .then((member) => res.send(member))
        .catch((err) => console.log(err))
})

//update (PATCH)
app.patch('/room/:id', (req, res) => {
    roomReservation.findOneAndUpdate( {_id : req.params.id}, req.body)
        .then((reservation) => {
            console.log('reservation updated');
            roomReservation.find({ _id : req.params.id})
                .then((reservation) => res.send(reservation))
                .catch((err) => console.log(err))})
        .catch(err => console.log(err))
})

//delete a room reservation
app.delete('/room/:id', (req,res) =>{
    roomReservation.findByIdAndDelete( {_id : req.params.id} )
        .then(res.send('Reservation deleted'))
        .catch(err => console.log(err))
})

app.listen(3500, () => {
    console.log('Listening to port 3500')
})