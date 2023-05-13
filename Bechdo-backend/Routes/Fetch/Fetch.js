const router = require('express').Router();
const productModel = require('../../Model/AllProducts');

router.get('/api/products',async(request,response)=>{
    console.log("routes");
    await productModel.find().exec()
    .then(res=>{
        return response.status(200).json(res);
    })
    .catch((error) =>{
        console.log(error);
    });
});

module.exports = router;