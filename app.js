const express = require('express')
const app = express();
app.use(express.json())
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
 res.send("hello");
})
// routes
app.use('/register', require('./routes/register'))


app.listen(port, () => {
 console.log(".....listening " + port)
})
