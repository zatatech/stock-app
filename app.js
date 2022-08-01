const express = require ("express")

const app = express()

app.get("/", (req, res) => {
      console.log("pet.recibida")
      res.send('<h1>hola mundo primer cambio<h1>')
})

app.listen(4000,()=>{
    console.log("servidor escuchando en el puertro 4000")
})