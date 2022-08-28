
require('dotenv').config()
const path = require("path") // servidor como AZURE tendra otro camino... de ahi todo debe ser cual
                            //variable.... el PATH es una de esas cosas

const express = require ("express")
const app = express()

app.use(express.json())  //MIDDLEWARE QUE intercepta objetos tipo JSON y lo deja en
                          // deja en la propiedad req.body
                          // y esto debe ser antes de usarlo en

const dbConnect = require('./db')  //console.log({dbConnect})
dbConnect(app)

const productRouter=require('./routes/product')
app.use('/api/v1/products', productRouter)



//.creando a MIDDLEWARE para que procese las peticiones 
// o get que vayan llegando a las distintas direcciones
// para decirle donde estaran nuestros archivos estaticos
//OJO: ESTO ES LO QUE HACE POSIBLE QUE SE CONENCTE CON LOS ARCHIVOS
//     INDEX.HTML   EN LA CARPETA PUBLIC
//app.use(express.static(path.join(__dirname,'public')))

