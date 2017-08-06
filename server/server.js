const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('express-favicon')
const path = require('path')


const app = express()
const port = process.env.PORT || 3000

app.use((req,res,next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`)
  } else {
    next()
  }
})

app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))
app.use(bodyParser.json())
app.use(express.static('build'))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
