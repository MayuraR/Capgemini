var express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');

app = express();
app.use(cookieParser())
app.use(express.json())

mongoose.Promise = global.Promise;


// connect to the database
mongoose.connect('mongodb+srv://test:test@cluster0.tfqi1.mongodb.net/user',{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
    .then(console.log('Connected to database "users"'))
    .catch((err) => {console.log(err)})

const User = require('../Models/Users')

// create json web token
const maxAge = 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'net ninja secret', {
    expiresIn: maxAge
  });
};

//get request for login
app.get('/login', (req, res) =>{
    res.send("Login Get")
})


//post request for login
app.post('/login', async (req, res) =>{
    const {userId, password} = req.body

    try {
        const user = await User.login(userId, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id , userId: user.userId});
      } 
      catch (err) {
        res.send(err.message)
      }
})

//post request for signup
app.post('/signup', (req, res) =>{
    const {userId, role, password} = req.body
    new User ({userId, role, password}).save()
        .then((user) => {
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            //remove the below line
            res.send(`${user._id}, ${user.userId}`)
        })
        .catch( err => console.log(err))

})

app.get('/logout', (req,res) => {
  res.cookie("jwt", "", {maxAge : 1})
  res.redirect('/login')
})

app.listen(4000, () => {
    console.log('Listening to port 4000')
})