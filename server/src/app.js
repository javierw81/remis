const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000
const generateId= () => Math.floor(Math.random() * 10000000000)
const db =[]

app.get('/', (req, res) => {
  const ret = {
    field1: "hola",
    field2: "chau"
  }

  res.send(ret)
})

app.get('/users', (req, res) => {   
  const ret = db

  res.send(ret);
 })

 app.post('/user', (req, res) => { 
      const user=req.body 
      
      db.push({...user, id: generateId()})

      res.send(user)
  })
  .put('/user/:id', (req, res) => { 
    const id = parseInt( req.params.id)
    const user=req.body 
    
    const index = db.findIndex(x => x.id == id) 
    db.splice(index,1)

    db.push({...user, id})

    res.send(user)
  })
  .delete('/user/:id', (req, res) => { 
    const id = parseInt( req.params.id)
    const user=req.body 

    const index = db.findIndex(x => x.id == id) 
    db.splice(index,1)
    
    res.send({id})
  })
  .get('/user/:id', (req, res) => { 
    const id = parseInt( req.params.id)
    const user=db.find(x=>x.id==id)   
    
    res.send(user)
  })

app.listen(port, () => {
  db.push({
    id:  generateId(),
    name: "Javier Alfredo",
    surname: "Wamba",    
  })
  db.push({
    id:  generateId(),
    name: "Maria Constanza",
    surname: "Catania",     
  })
  console.log(`Example app listening at http://localhost:${port}`)
})