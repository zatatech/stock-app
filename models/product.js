const mongoose = require('mongoose');

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

module.exports = Product