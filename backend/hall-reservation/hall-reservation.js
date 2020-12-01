var express = require('express');
var mongoose = require('mongoose');

app = express();

mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect('mongodb+srv://test:test@cluster0.tfqi1.mongodb.net/hall-reservation',{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false })
    .then(console.log('Connected to database "hallreservation"'))
    .catch((err) => {console.log(err)})

app.use(express.json())

const Hall = require('../Models/Hall-reservation')

//methods: ADD, GET, UPDATE

//Get all hall reservations
app.get('/hall', (req, res) =>{
    Hall.find({})
        .then((hall) => res.send(hall))
        .catch((err) => console.log(err))
})

//Get hall reservation by date
app.get('/hall/:date', (req, res) =>{
    Hall.find({ dateOfReservation : Date.parse(req.params.date)})
        .then((reservation) => res.send(reservation))
        .catch((err) => console.log(err))
})

//add a hall reservation (POST)
app.post('/hall', (req, res) =>{
    (new Hall ( { 'membershipId' : req.body.membershipId, 'dateOfReservation' : req.body.dateOfReservation, 'verificationDoc' : req.body.verificationDoc, 'purpose' : req.body.purpose}))
        .save()
        .then((reservation) => res.send(reservation))
        .catch((err) => console.log(err))
})

//update a reservation (PATCH)
app.patch('/hall/:id', (req, res) =>{
    Hall.findOneAndUpdate({ _id : req.params.id}, { $set : req.body })
        .then((reservation) => {
            console.log('reservation updated');
            Hall.find({ _id : req.params.id})
                .then((reservation) => res.send(reservation))
                .catch((err) => console.log(err))})
        .catch((err) => console.log(err))
    
})

//deleting a reservation 
app.delete('/hall/:id', (req, res) =>{
    Hall.findOneAndDelete({  _id : req.params.id })
        .then((reservation) => res.send("Reservation deleted"))
        .catch((err) => console.log(err))
})

app.listen(3500, () => {
    console.log('Listening to port 3500')
})