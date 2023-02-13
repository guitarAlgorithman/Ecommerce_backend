const compra = require("../models/compra.model");
const user=require("../models/user.model");
const product=require("../models/product.model");
const jwt = require("../auth/jwt");

const buy=async(req,res)=>{
  // console.log(req);
    try{
        const username = jwt.extractSub(req);
        // console.log(username);
        const comprado=req.params.name
        // console.log(comprado);
        // const p = await product.findOne({ name:comprado });
        // console.log(p);
        const c = new compra();
        if(username && comprado){
            c.quantity=parseInt(req.body.quantity)
            c.price=parseInt(req.body.price)
            const u = await user.findOne({ username: username })
            // console.log(u);
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
//TODO: falta
const getCompras= async (req, res) => {
  try {
    let username=req.params.username
    // console.log(username);
    const filter = {
      user: username
    }
    const compras = await compra.find(filter);
    // console.log(compras);
    return res.json({ compras });
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message
    });
  };
};

module.exports = {
    buy,
    getCompras
  }
