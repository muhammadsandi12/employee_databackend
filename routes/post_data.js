const User =require('../models/user')

const post_data=(req,res)=>{
    //res.send(req.body)
    User.create(req.body).then
    (
        (user)=>res.send(user),
        (err)=>res.send(err)
    )
}
module.exports = post_data;