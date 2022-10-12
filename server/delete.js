//function for deleting user. User id is taken from form and then user is located in databse using the userid and then deleted.
module.exports = function(db,app,ObjectID){
    app.post('/api/deleteitem', async function(req,res){
        if (!req.body) {
            return res.sendStatus(400);
        }
        productID = req.body.productid;
        console.log(req.body);

       // var objectid = ObjectID(productID);
        const collection = db.collection('users');
       // await collection.find({}).toArray((err,result)=>{console.log(result)});

        await collection.deleteOne({'userID':productID},(err,docs)=>{
            console.log(docs);
            console.log(err);
             collection.find({}).toArray((err,data)=>{
                if (err){
                    console.log(err);
                } else {
                res.send(data);
                }
            });
        });
    })
}