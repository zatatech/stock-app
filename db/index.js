const mongoose = require ('mongoose')

const dbConnect = (app)=>{

    mongoose.connect (   
        `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@development.jjjfyew.mongodb.net/stock-app?retryWrites=true&w=majority`
      )
      .then((result) => {
        const PORT= process.env.PORT || 4000
        app.listen(PORT,()=>{
          //  console.log("servidor escuchando en el puerto "+ PORT)  o
            console.log(`servidor escuchando en el puerto ${PORT}`)
        })
        console.log("conex exitosa a mongoDB")
      
      }) 
      .catch((err) => console.log(err))

}
//console.log({module})
module.exports=dbConnect