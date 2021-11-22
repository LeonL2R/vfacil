const Ruta =require('../models/ruta');

function prueba(req,res){
    res.status(200).send({
    message: 'probando una acción' 
    });
}

function saveRuta(req,res){
    var myRuta= new Ruta (req.body);
    myRuta.save((err,result)=>{
    res.status(200).send({message:result});
    });
}

function buscarData(req,res){
    var Idruta=req.params.id;
    Ruta.findById(Idruta).exec((err,result)=>{   
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
                res.status(200).send({result});
            }
        }
    });
}

function listarAllData(req,res){
    var Idruta=req.params.idb;
    if(!Idruta){
        var result=Ruta.find({}).sort('Origen');
    }else{
        var result=Ruta.find({ruta:Idruta}).sort('Origen');
    }

    result.exec(function(err,result){
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
                res.status(200).send({result});
            }
        }
    })
}

function updateRuta(req,res){
    var Idruta = req.params.id;
    Ruta.findOneAndUpdate({_id: Idruta}, req.body, {new: true}, function(err, Ruta) {
        if (err)
        res.send(err);
        res.json(Ruta);
    });        
};

function deleteRuta(req,res){
    var Idruta=req.params.id;
    Ruta.findByIdAndRemove(Idruta, function(err, Ruta){
        if(err) {
            return res.json(500, {
                message: 'No hemos encontrado la ruta'
            })
        }
        return res.json(Ruta)
    })
};

module.exports={
    prueba,
    saveRuta,
    buscarData,
    listarAllData,
    updateRuta,
    deleteRuta
}
