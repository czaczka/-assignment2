//function for getting an individual user using their id and then sending back full array of user details
module.exports = function(db,app) {
    app.post('/api/getitem', async function(req,res){
        console.log(req.body);
        const collection = db.collection('users');
        await collection.find({userID:Number(req.body.userID)}).toArray((err,data)=>{
            console.log("this"+data);
            
            res.send(data);
        })
    })
}