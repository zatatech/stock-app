const express = require ("express")
require('dotenv').config()

const app = express()

app.get("/", (req, res) => {
      console.log("pet.recibida")
      res.send('<h1>hola mundo primer cambio<h1>')
})

const PORT= process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log("servidor escuchando en el puerto "+ PORT)
    console.log("servidor escuchando en el puerto ${PORT}")
})