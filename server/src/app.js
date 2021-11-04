const express = require("express");
const bodyParser = require('body-parser');
const storage = require('node-persist');
const Db = require('./Db.js');
const turf = require('@turf/turf')

const app = express();
var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000
let users
let clients
let drivers

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

/* ---------------DRIVERS---------------------- */
app.get('/drivers', (req, res) => {
  const ret = drivers.getAll()

  res.json(ret);
})

app.post('/driver', (req, res) => {
  const driver = req.body

  drivers.create(driver)

  res.json(driver)
})
  .put('/driver/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const driver = req.body

    drivers.update(id, driver)

    res.json(driver)
  })
  .delete('/driver/:id', (req, res) => {
    const id = parseInt(req.params.id)

    drivers.delete(id)

    res.json({ id })
  })
  .get('/driver/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const driver = drivers.getOne(id)

    res.json(driver)
  })



/* ---------------COUNTRIES---------------------- */
app.get('/countries', (req, res) => {
  const ret = countries.getAll()

  res.json(ret);
})
  .get('/country/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const country = countries.getOne(id)

    res.json(country)
  })

/* ---------------CITIES---------------------- */
app.get('/cities', (req, res) => {
  const ret = cities.getAll()

  res.json(ret);
})
  .get('/city/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const city = cities.getOne(id)

    res.json(city)
  })

app.get('/geo/intercept/check', (req, res) => {
  const coords = [
    [-87.80425648022474, 40.22673274307446],
    [-87.76998450983932, 40.22623852556582],
    [-87.7699768997222, 40.22623813348474],
    [-87.73714100408094, 40.18278144411566],
    [-87.80425648022474, 40.22673274307446]
  ]
  const coords1 = [
    [-589221, 104522],
    [-589021, 104526],
    [-589021, 104526],
    [-588830, 104857],
    [-589221, 104522]
  ]

  const coords2 = [
    [-87.8231621, 40.2300045],
    [-87.8219604, 40.1967081],
    [-87.7915764, 40.1900206],
    [-87.7632523, 40.1978881],
    [-87.7644539, 40.2313151],
    [-87.7915764, 40.1900206],
    [-87.8229904, 40.2302666],
    [-87.8231621, 40.2300045]]

  const polygon = turf.polygon([coords2])
  const intercepts = turf.kinks(polygon)

  res.json(intercepts)
})


/* ---------------APP START---------------------- */
app.listen(port, async () => {
  await storage.init()

  users = new Db(storage, "users")

  clients = new Db(storage, "clients")

  drivers = new Db(storage, "drivers")

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

  if (!drivers.getAll().length) {
    drivers.create({
      name: "Alberto Alfredo",
      surname: "Gomez",
      address: "Aguilar 2556",
      city: "Banfield",
      licenceNumber: "78955555",
      licenceClass: "A",
      car: "Volksvagen Gol",
      carLicencePlate: "ASE 345"
    })
    drivers.create({
      name: "Facundo Augusto",
      surname: "Cabral",
      address: "9 de julio 122)",
      city: "CABA",
      licenceNumber: "455343543",
      licenceClass: "B",
      car: "Ford KA",
      carLicencePlate: "RRT 367"
    })
  }

  console.log(`Example app listening at http://localhost:${port}`)
})