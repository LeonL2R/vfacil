const mongoose=require('mongoose');
mongoose
.connect( "mongodb+srv://LeonL2R:2045@vuelafacil.t91n1.mongodb.net/vuelafacil?retryWrites=true&w=majority", {
useNewUrlParser: true,
useUnifiedTopology: true,
},(err,res)=>{
if(err){
throw err;
}else{
console.log('La conexion a la base de datos fue correcta...')
}
});

module.exports=mongoose;