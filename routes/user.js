const by_name =require('../routes/by_name')
const by_id = require('../routes/by_id')
const all = require ('../routes/all')
const form_create = require ('../routes/form_create')
const post_data = require ('../routes/post_data')
const delete_id = require ('../routes/delete_id')
const form_update = require ('../routes/form_update')
const update_by_id = require('../routes/update_by_id')








    
module.exports ={
    by_name,
    by_id,
    form_create,
    post_data,
    all,
    delete_id,
    form_update,
    update_by_id

}