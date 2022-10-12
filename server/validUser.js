//function for checking if user email and password match in the database, if they do then the entire user is sent back otherwise and error is sent back prompting the user to verify their login

module.exports = function(db,app) {
    app.post('/api/checkuser',async function(req,res){
        if (!req.body) {
            return res.sendStatus(400);
        }
        u = req.body.useremail;
        p = req.body.userpassword;
        user = req.body;
        c = u + p;
        console.log(user);
        const collection = db.collection('users');
        await collection.find({'email':u,'password':p}).count((err,count)=>{
            if (err){
                console.log(err);
            }
            if (count==1){
                collection.find({'email':u}).toArray(function(err,docs){
                console.log(docs);
                let userData = docs;
                userData["ok"] = true;
                console.log(userData);
                res.send(userData);
                })

                // res.send({success:1})
                console.log(count);
            } else {
                let userData = false;
                res.send(userData);
                console.log("error");

            }
        })
    })
}
