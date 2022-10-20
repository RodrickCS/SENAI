const express = require('express')
const cors = require('cors')

const routes = require('./src/routes.js')
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3070, () => {
    console.log("Respondendo na porta 3070")
})