const express = require('express')
const cors = require("cors");

const app = express()

app.use(express.json())

app.get('/api/users', () => {

})

// app.get()



app.listen(4000, () => {
    console.log('up on 4000');
})