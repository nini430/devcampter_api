const express=require('express');

const bootcampRouter=require('./bootcamps/bootcamp')
const courseRouter=require('./courses/course')

const router=express.Router();

router.use('/bootcamps',bootcampRouter);
router.use('/courses',courseRouter);

module.exports=router;