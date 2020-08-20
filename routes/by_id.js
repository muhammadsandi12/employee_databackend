const User =require('../models/user')

const by_id = (req,res)=>{
    User.findByPk(req.params.id).then(
        (user) =>{
            res.render('single_user',{user})
        },
        (err) =>res.send(err)
    )

}
module.exports = by_id