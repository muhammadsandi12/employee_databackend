const {Sequelize, DataTypes, Op, Model} =require('sequelize')

const sequelize = new Sequelize({
    dialect:'mysql',
    host:'localhost',
    port: 3306,
    username: 'employee_data',
    password: 'Employee_data12!',
    database: 'employee_data'
})

const User = sequelize.define(
    'user',
    {  
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
       
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        
    },{tableName:"user",
    timestamps:false
}
)

module.exports = User