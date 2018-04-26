const express = require('express');
const app = express()
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')


const db = require('./config/keys').mongoURI
const port = process.env.PORT || 5000
const mongoose = require('mongoose')

mongoose.connect(db)
    .then(()=>console.log("Connected to mongodb"))
    .catch(err=>console.log(err))

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.use('/api/users',users)
app.use('/api/profile',users)
app.use('/api/posts',users)

app.listen(port,()=>console.log(`Server running on port ${port}`));

