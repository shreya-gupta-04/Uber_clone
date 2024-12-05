const mongoose=require('mongoose'); 


//DATABSE SE CONNECT
function connectToDb()
{
    mongoose.connect(process.env.DB_CONNECT).then(()=>
            {console.log('Connected to DB');

            }).catch(err=>console.log(err));
}


module.exports=connectToDb;
