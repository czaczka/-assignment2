//function for updating user data. userid is taken and fields are posted to the database based on the user id
module.exports = function(db,app,ObjectID) {
    var result;
    app.post('/api/update',function(req,res){
        if (!req.body) {
            return res.sendStatus(400)
        }
        product = req.body;
        console.log("product"+product);

       let objectid = product.userID;
        const collection = db.collection('users');
        collection.updateOne({userID:objectid},{$set:{name:product.name,email:product.email,password:product.password,role:product.role}},()=>{
            res.send({'ok':objectid});
        })
    })
}