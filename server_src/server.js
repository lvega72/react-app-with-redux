const express = require('express')
const path = require('path')
const app = express()

let staticPath = path.join(__dirname, '../build');
console.log(staticPath);
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'))
})

app.get('/ping', (req, res) => {
  return res.send('pong')
})


app.listen(8080)