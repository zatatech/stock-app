const Product = require('../models/product')

const getProducts = async (req,res)=>{
    const products = await Product.find()
    res.status(200).json({ok:true , products , count:products.length})

}

const postProduct = (req,res) => {    // console.log({body:req.body})
      if(!req.body.name){
        res.status(400).json({
          ok:false,
          message: 'el campo NOmbre es Obligatorio',
        })
        return
      }

   const newProduct = new Product(req.body)   /*const newProduct = new Product({
                                                name:req.body.name,
                                                price:req.body.price
                                                })*/
   newProduct
      .save()  
      .then((result)=>{
        res.status(201).json({ok:true})
      })
      .catch((err)=> console.log(err))
       
}

module.exports = {
    getProducts,
    postProduct,
}