module.exports = function(db,app) {
    console.log("working1");
    app.post('/api/getitem', function(req,res){
        console.log("working2");
        console.log(req.body);
        const collection = db.collection('users');
        collection.find({userID:Number(req.body.userID)}).toArray((err,data)=>{
            console.log("this"+data);
            res.send(data);
        })
    })
}