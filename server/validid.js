//function for checking if user id is unique. searches the count of the given id to see if it is 0
module.exports = function(db,app){
    app.post('/api/checkvalidid',function(req,res) {
        if (!req.body) {
            return res.sendStatus(400)
        }
        product = req.body;
        const collection = db.collection('users');
        collection.find({'id':product.id}).count((err,count)=>{
            if (count==0){
                res.send({success:1,topnum:0});
            } else {
                collection.find({}, {sort: {id: -1}, limit: 1}).toArray(function(err,items){
                    console.log(items);
                    res.send({success:0,topnum:items[0].id});
                });
            }
        })
    })
}