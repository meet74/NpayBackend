const express=require('express');
var cors=require('cors')

const adminController=require('../controllers/admin');

const router=express.Router();

router.post('/deleteuser/:uid',adminController.deleteUser);
router.post('/getUser',adminController.getUser);
router.use(cors())
router.post('/sendmessage',adminController.sendNotification)



module.exports=router
