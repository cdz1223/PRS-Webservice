var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();
const passSchema = require('../model/passModel');
/* GET home page. */
router.get('/getPassService/:apikey/:platform/:customer/:stage/:step/:program/:version/:plant', async function(req, res, next) {
    {
    if(req.params.apikey=='PRSAPIKEY'){
    if(req.params.platform=="UFLEX"){
    const A = await passSchema.find({status: 'pass',platform:req.params.platform,customer:req.params.customer,stage:req.params.stage,step:req.params.step,program:req.params.program,version:req.params.version,plant:req.params.plant}); // 括號內可設定尋找條件
    console.log(A);
    console.log(req.params.platform)
    console.log(req.params.customer)
    console.log(req.params.stage)
    console.log(req.params.step)
    console.log(req.params.program)
    console.log(req.params.version)
    console.log(req.params.plant)

        let B='[\n'
        for(let i=0 ; i<A.length ;i++){
           B+=
           `{${A[i].bomNo},${A[i].platform},${A[i].stage},${A[i].step},${A[i].program},${A[i].version},${A[i].plant}}\n`
        }
        B +=']'
        console.log('B:',B);
        if(A.length!=0)
        {res.send(B);}
        else{res.send("FIND NOTHING")}
    }

else{
    const A = await passSchema.find({status: 'pass',platform:req.params.platform,customer:req.params.customer,stage:req.params.stage,step:req.params.step,program:req.params.program,version:req.params.version,plant:req.params.plant}); // 括號內可設定尋找條件
    console.log(A);
    console.log(req.params.platform)
    console.log(req.params.customer)
    console.log(req.params.stage)
    console.log(req.params.step)
    console.log(req.params.program)
    console.log(req.params.version)
    console.log(req.params.plant)

        let B='[\n'
        for(let i=0 ; i<A.length ;i++){
           B+=
           `{${A[i].bomNo},${A[i].platform},${A[i].stage},${A[i].step},${A[i].program},${A[i].version},${A[i].plant}}\n`
        }
        B +=']'
        console.log('B:',B);
        if(A.length!=0)
        {res.send(B);}
        else{res.send("FIND NOTHING")}
}
    }
}
});

module.exports = router;
