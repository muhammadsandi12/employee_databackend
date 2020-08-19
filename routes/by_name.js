const {Op} =require('sequelize')

const by_name = (req,res)=>{
    User.findOne({
        where:{
            name:{
                [Op.eq]:req.params.name
            }
        }
    })
    .then(
        (data)=>{
            res.send(data)
        },
        (err)=> res.send(err)
    )

}

module.exports = by_name;
