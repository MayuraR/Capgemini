var express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser')
var { requireAuth } = require('../middleware/authMiddleware')

app = express();
app.use(cookieParser())

mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect('mongodb+srv://test:test@cluster0.tfqi1.mongodb.net/bills',{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false })
    .then(console.log('Connected to database "bills"'))
    .catch((err) => {console.log(err)})

app.use(express.json())

const Bill = require('../Models/Bill')

//methods: ADD, GET

//Get bill by customer id
app.get('/bill/:memberId',requireAuth, (req, res) =>{
    Bill.find({ memberId : req.params.memberId})
        .then((bills) => res.send(bills))
        .catch((err) => console.log(err))
})

//get total income
//http://localhost:3800/income?start=2018-01-01&&end=2018-12-31
app.get('/income',requireAuth, (req, res) =>{
    const matchStart = Date.parse(req.query.start)
    const matchEnd = Date.parse(req.query.end)
    Bill.find({ date : {"$gt": new Date( matchStart ) ,"$lt": new Date( matchEnd ) }})
        .then((bill) => {
            let sum =0
            bill.forEach( elememt =>{
                sum+=elememt.grandTotal
            })
            res.send(`The total is ${sum}`)
        }
        )
        .catch((err) => console.log(err))
})

//add a bill(POST)
app.post('/bill',requireAuth, (req, res) =>{
    (new Bill ( { 'memberId' : req.body.memberId, 
                    'date' : req.body.date, 
                    'amount' : req.body.amount, 
                    'gst' : req.body.gst, 
                    'grandTotal' : req.body.grandTotal
                }))
        .save()
        .then((bill) => res.send(bill))
        .catch((err) => console.log(err))
})



app.listen(3800, () => {
    console.log('Listening to port 3800')
})