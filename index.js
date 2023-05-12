import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'


import {getAll, getOne, create, update, remove, getChildren, getMainChildren} from "./controllers/Employee.js"

import {generateData} from "./controllers/GenerateData.js"

const app = express()
const uri = "mongodb+srv://admin:Wcj12opO74P21fNQ@admin.dppbhti.mongodb.net/employees?retryWrites=true&w=majority"
mongoose.connect(uri).then(() => console.info('connect ok')).catch((error) => console.error(error))

app.use(express.json())

app.use(cors())

app.get('/employees', getAll)
app.get('/employees/:id', getOne)
app.delete('/employees/:id', remove)

app.get('/employeesParent/', getMainChildren)
app.get('/employeesParent/:parent', getChildren)

app.post('/employees', create)
app.patch('/employees/:id', update)

app.get('/generatedata', generateData)

app.get('/', (req, res) => {
    res.send('TEST N3')
})

app.listen(4444, (err) => {
    if (err) {
        return console.error('err')
    }
    return console.info('run')
})
