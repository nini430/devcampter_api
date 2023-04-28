const logger=(req,res,next)=>{
    const start=new Date();
    next();
    const timeElapsed=new Date()-start;
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} ${timeElapsed}ms`)
}

module.exports=logger;