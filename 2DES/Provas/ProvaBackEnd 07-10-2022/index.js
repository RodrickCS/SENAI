const express = require('express')
const cors = require('cors')

const allSol = require('./src/routes/all_sol')


const app = express()
app.use(express.json())
app.use(cors())
app.use(allSol)


app.listen(5000, () => {
    console.log("Respondendo na porta 5000")
})