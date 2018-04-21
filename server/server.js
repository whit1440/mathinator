const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000

// functions for specific operations
const add = (l, r) => { return l + r }
const subtract = (l, r) => { return l - r }
const multiply = (l, r) => { return l * r }
// TODO - actual error handling / response for division by zero
const divide = (l, r) => { return (r !== 0) ? l / r : 0 }

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('client'))

app.get('/math/:operation', (req, res) => {
  console.log(req.query)
  console.log(req.params)
  const l = parseInt(req.query.left)
  const r = parseInt(req.query.right)
  const op = req.params.operation
  let answer = NaN
  switch(op) {
    case 'add': answer = add(l, r); break;
    case 'subtract': anwer = subtract(l, r); break;
    case 'multiply': answer = multiply(l, r); break;
    case 'divide' : answer = divide(l, r); break;
  }
  res.send(JSON.stringify({answer:answer}))
})

app.listen(PORT, () => {
  console.log(`Turnin' and Burnin' on port ${PORT}`)
})
