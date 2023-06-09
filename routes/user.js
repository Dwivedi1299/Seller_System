const express=require('express');
const router=express.Router();
console.log("router loaded");

const userController=require('../controllers/user_controller');
router.get('/Registationpage',userController.Registationpage);

const dash_b=require('../controllers/dsah_controller');
router.get('/das',dash_b.dash);

router.post('/create', userController.create);


module.exports=router;
