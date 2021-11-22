var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var RutaSchema=Schema({
    Idruta:String,
    Origen:String,
    Destino:String,
    Fecha:String,
    Hora:String
    });

const Ruta = mongoose.model('ruta',RutaSchema);
module.exports = Ruta;
 
    