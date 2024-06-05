const express = require('express')
const app = express()
const port = 3000;
require("./db");



app.get('/getOrder', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})