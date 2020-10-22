const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000

app.get('/', (req, res) => {
  const ret = {
    field1: "hola",
    field2: "chau"
  }

  res.send(ret)
})

app.get('/users', (req, res) => {   
  const ret = [
    {
      id: 12,
      name: "Javier Alfredo",
      surname: "Wamba",
      birthdate:  new Date(1981,3,3) 
    },
    {
      id: 14,
      name: "Maria Constanza",
      surname: "Catania",
      birthdate:  new Date(1986,9,9) 
    }
  ]
  res.send(ret);
 })

 app.post('/user', (req, res) => { 
      const user=req.body 
      
      res.send({ ...user, code: "ok"})
  })
  .put('/user/:id', (req, res) => { 
    const id = req.params.id
    const user=req.body 
    
    res.send({ ...user, id, code: "ok"})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})