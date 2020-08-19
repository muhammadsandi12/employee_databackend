const {Sequelize} =require('sequelize')

const sequelize = new Sequelize({
    dialect:'mysql',
    host:'localhost',
    port: 3306,
    username: 'employee_data',
    password: 'Employee_data12!'
})

const by_name = (req,res)=>{
    const data={
        name:req.params.name
    }
    res.render('user_name',data)
}

const by_id = (req,res)=>{
    sequelize.authenticate().then(
        ()=>res.send('Successfull'),
        ()=>res.send('Unsuccessfull')

    )
    
    // let message =''
    // try{
    //     await sequelize.authenticate();
    //     message ='Successfull'

    // }catch(error){
    //     message ='UnSuccessfull'

    // }
    // res.render('message')
}

    
module.exports ={
    by_name,
    by_id
}