const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios');
const controller = require('./controllers/controller.js')
const port = 4000;

const app = express();

app.use(bodyParser.json())

app.get('/api/get-cards', controller.getCards)

app.post('/api/create-card', controller.createCard)

app.put('/api/edit-card/:id', controller.edit)

app.delete('/api/delete-card/:id', controller.delete)










app.listen(port, () => {
    console.log(`Welcome Commander${port}`)
})