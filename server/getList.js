//function for getting entire list of users and sending it back as an array

module.exports = function(db,app) {
    app.get('/api/getlist', function(req,res){
        const collection = db.collection('users');
        collection.find({}).toArray((err,data)=>{
            console.log(data);
            res.send(data);
        })
    })
}