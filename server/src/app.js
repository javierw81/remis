const express = require("express");
const bodyParser = require('body-parser');
const storage = require('node-persist');
const Db = require('./Db.js');
const app = express();
var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000
let users
let clients

app.get('/', (req, res) => {
  const ret = {
    field1: "hola",
    field2: "chau"
  }

  res.json(ret)
})

/* ---------------USERS---------------------- */
app.get('/users', (req, res) => {
  const ret = users.getAll()

  res.json(ret);
})


app.post('/user', (req, res) => {
  const user = req.body

  users.create(user)

  res.json(user)
})
  .put('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = req.body

    users.update(id, user)

    res.json(user)
  })
  .delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)

    users.delete(id)

    res.json({ id })
  })
  .get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.getOne(id)

    res.json(user)
  })

/* ---------------CLIENTS---------------------- */
app.get('/clients', (req, res) => {
  const ret = clients.getAll()

  res.json(ret);
})

app.post('/client', (req, res) => {
  const client = req.body

  clients.create(client)

  res.json(client)
})
  .put('/client/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const client = req.body

    clients.update(id, client)

    res.json(client)
  })
  .delete('/client/:id', (req, res) => {
    const id = parseInt(req.params.id)

    clients.delete(id)

    res.json({ id })
  })
  .get('/client/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const client = clients.getOne(id)

    res.json(client)
  })

/* ---------------APP START---------------------- */
app.listen(port, async () => {
  await storage.init()

  users = new Db(storage, "users")

  await users.init()


  clients = new Db(storage, "clients")

  await clients.init()

  if (!users.getAll().length) {
    users.create({
      name: "Javier Alfredo",
      surname: "Wamba",
      address: "perdernera 2556",
      city: "Lanus"
    })
    users.create({
      name: "Maria Constanza",
      surname: "Catania",
      address: "Gurtelstr 18",
      city: "Berlin"
    })
  }

  if (!clients.getAll().length) {
    clients.create({
      businessName: "Arativa",
      cuit: "30-56895623-2",
      address: "perdernera 2556",
      city: "Lanus"
    })
    clients.create({
      businessName: "Javier Alfredo",
      cuit: "30-12345678-2",
      address: "allende 18",
      city: "Quilmes"
    })
  }

  console.log(`Example app listening at http://localhost:${port}`)
})