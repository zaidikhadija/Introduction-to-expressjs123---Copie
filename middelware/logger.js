function logger (req,res,next){
    console.table({method:req.method,path:req.url});
    if(5 > 4){
        next()
        
    }
    else res.send ("oups req blocked");

}

module.exports = logger;