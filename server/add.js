module.exports = function(db,app) {
    app.post('/api/add', async function(req,res){
        if (!req.body) {
            return res.sendStatus(400)
        }
        user = req.body;
        console.log("req body"+user);
        const collection = db.collection('users');

        await collection.find({'userID':user.userID}).toArray(function(err,docs){console.log(docs)})


        collection.find({'userID':user.userID}).count((err,count)=>{
            if (count == 0){
                collection.insertOne(user,(err,dbres)=>{
                    if (err) throw err;
                    let num = dbres.insertedCount;

                    res.send({'num':num,err:null});
                })
            } else {
                res.send({num:0,err:"duplicate item"});
            }
        })
    })
}