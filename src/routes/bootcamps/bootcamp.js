const express=require('express');
const {getAllBootcamps,getBootcamp,createBootcamp,deleteBootcamp,updateBootcamp}=require('../../controllers/bootcamps/bootcamp')

const router=express.Router();

router.route('/').get(getAllBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

module.exports=router;