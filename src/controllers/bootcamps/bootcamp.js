
//@desc Get All Bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getAllBootcamps=(req,res,next)=>{
    return res.status(200).json({success:true,msg:'Showing All Bootcamps'})
}

//@desc Get Single bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public

exports.getBootcamp=(req,res,next)=>{
    return res.status(200).json({success:true,msg:`Showign data about bootcamp with id ${req.params.id}`})
}

//@desc Create Bootcamp
//@route POST /api/v1/bootcamps
//@access Private

exports.createBootcamp=(req,res,next)=>{
    return res.status(201).json({success:true,msg:'Bootcamp creation'})
}

//@desc Update single bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Private

exports.updateBootcamp=(req,res,next)=>{
    return res.status(200).json({success:true,msg:`Bootcamp with id ${req.params.id} is updated`})
}

//@desc Delete  bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access Private

exports.deleteBootcamp=(req,res,next)=>{
    return res.status(200).json({success:true,msg:`Bootcamp with id ${req.params.id} is deleted`})
}
