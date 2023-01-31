const compra = require("../models/compra.model");
const product=require("../models/product.model");
const user=require("../models/user.model");
const jwt = require("../auth/jwt");

const buy=async(req,res)=>{
    console.log("cjecl");
    try{
        const { quantity,street, number, comuna,city} = req.body;
        const username = jwt.extractSub(req);
        console.log(username);
        const comprado=req.params.name
        const p = await product.findOne({ name:comprado });
        console.log(p);
        const c = new compra();
        if(parseInt(quantity)>0 && username && p){
            c.quantity=parseInt(quantity)
            c.street=street
            c.number=number
            c.comuna=comuna
            c.city=city
            const u = await user.findOne({ username: username })
            c.user = u            
            c.product=comprado
            const result = await compra.create(c);
            return res.json({
                msg: "Ok!",
                details: result
              });
        }
        else {
            return res.status(401).json({
              msg: "Error",
              details: "Request bad formed"
            });
          }
    }  
    catch (error) {
    return res.status(500).json({
      msg: "error al realizar la compra",
      details: error.message
    });
  }
}

module.exports = {
    buy
  }
