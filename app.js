const express = require ("express")


const mongoose = require ('mongoose')

//cuando esto esta en tu propio PC no importa mucho
//pero cuyando se mueva aun servidor como AZURE
//tendra otro camino... de ahi todo debe ser cual
//variable.... el PATH es una de esas cosas
const path = require("path")


require('dotenv').config()

const app = express()




const PORT= process.env.PORT || 4000

//es asyncrono y devuelve una promesa
mongoose.connect (   
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@development.jjjfyew.mongodb.net/stock-app?retryWrites=true&w=majority`
)
.then((result) => {
  app.listen(PORT,()=>{
    //  console.log("servidor escuchando en el puerto "+ PORT)  o
      console.log(`servidor escuchando en el puerto ${PORT}`)
  })
  console.log("conex exitosa a mongoDB")

}) 
.catch((err) => console.log(err))

//configurar en monGOOSE un MODEL que va interactuar con una COLLECTIONS
//en sql hay tablas en mongo COLLECTIONS
//COLLECTIONS OF DOCUMENTS
//Se debe definir que tipo de datos que envia a la DB con un Schema
const productSchema = mongoose.Schema(
  {
    name:{type:String, required:true},
    price: Number,
  },
  {timestamps: true}
)
const Product = mongoose.model('Product', productSchema, 'Products')





app.use(express.json())  //MIDDLEWARE QUE intercepta objetos tipo JSON y lo deja en
                          // deja en la propiedad req.body
app.post('/api/v1/products',(req,res) => {
 // console.log('peticion recibida')
 // console.log({body:req.body})
  /*
    const newProduct = new Product({
      name:req.body.name,
      price:req.body.price
    })
  */
  // cuando se desarrolla se USA que todos los nombre coincidan
  //de tal forma que se puede poner la variable body del JSON
  // ya que tiene en mismo formato es decir... el
  const newProduct = new Product(req.body)

  newProduct
    .save()  
    .then((result)=>{
      res.status(201).json({ok:true})
    })
    .catch((err)=> console.log(err))
  

})



/*
//  CURIOSAMENTE el tambien lo llama a este un MIDDLEWARE
app.get("/", (req, res, next) => {
  //ESTA consola es de COMPUTADOR/SERVIDOR no del BROWSER
  // ESTO se ejecuta en el servidor
  console.log("pet.recibida")

   //cambiamos estas instrucciones por el manejo del siguiente MIDDLEWARE
      // res.status(200).send('<h1>hola mundo primer cambio<h1>')
      // res.status(200).sendFile('index.html',)
      // res.status(200).sendFile('index.html',{root: __dirname})
  console.log({directorio: __dirname})
    
  next()  //este es in indicador de que la logica termino
      // y que siga con el siguiente
})

*/


//.creando a MIDDLEWARE para que procese las peticiones 
// o get que vayan llegando a las distintas direcciones
// para decirle donde estaran nuestros archivos estaticos
//OJO: ESTO ES LO QUE HACE POSIBLE QUE SE CONENCTE CON LOS ARCHIVOS
//     INDEX.HTML   EN LA CARPETA PUBLIC
app.use(express.static(path.join(__dirname,'public')))



