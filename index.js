const express = require('express');
const req = require('express/lib/request');
const app = express()
const port = 80

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Go!Animate for Schools listening on port ${port}`)
})