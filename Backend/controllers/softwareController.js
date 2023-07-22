const Software = require('../models/SoftwareCoupons');
const pagination = async(req, res) =>{
    try {
        var page = req.body.page || req.query.page;
        var productdata;
        var skip;
        const limit = 20;
        if(page <=1){
skip = 0;
        }else{
            skip = (page - 1) * limit;
        }
      
    productdata = await Software.find().sort({"_id": 'ascending'}).skip(skip).limit(limit)
        
        res.status(200).send({ success: true, data: productdata });

        
    } catch (error) {
        res.status(400).send({ success: false, msg: "No blog found" });

    }
}

const coupon_by_id = async (req, res) => {
    try {
        const id = req.query.id || req.body.id;
        const coupon = await Software.findOne({ _id: id });

        if (coupon) {
            res.status(200).send({ success: true, coupon: coupon });

        } else {
            res.status(200).send({ success: false, msg: "Some Error Occured or Coupon not Exists", error: error.msg })

        }


    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again", error: error.message });

    }
}
module.exports = {pagination, coupon_by_id}