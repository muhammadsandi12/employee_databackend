const express =require('express')
const app = express()
const port =4000
const username= 'employee_data'
const password= 'Employee_data12!'
app.set('view engine','twig')
app.get('/',(req,res)=>{                          
    res.send('server')
})
const user =require('../routes/user')

app.get('/',(req,res)=>{
    res.send('server')
})
app.get('/user/:name',user.by_name)
app.get('/user_by_id/:id',user.by_id)

app.listen (port, '0.0.0.0',()=>{
    console.log(`Example app listening at http://localhost:${port}`)

}) 











//req params untuk mendapatkan nilai
// app.get('/user/:id',(req,res)=>{                          
//     res.render(
//         'user_name',
//         {
//             name : req.params.id
//         }
//     )

//     const data ={
//         name :req.param.name
//     }
//     res.render('user_name',data)
// })




