var mongoose=require('mongoose');

var User=mongoose.model('User');
var bcrypt=require('bcrypt-nodejs');
var jwt=require('jsonwebtoken');




module.exports.register=function(req,res){
    var usernames=req.body.username;
    var names=req.body.name||null;
    var passwords=req.body.password;
    
    User
        .create(
    {
        username:usernames,
        name:names,
        password:bcrypt.hashSync(passwords,bcrypt.genSaltSync(10))
        
    },function(err,user){
        if(err){
            console.log(err);
            res.json(err);
        }else{
            console.log('User Created',user);
            res.json(user);
        }
        
    });
    
};


module.exports.login=function(req,res,next){
    
    var username=req.body.username;
    var password=req.body.password;
    console.log("Vinits logs",req);
    
    
    User.findOne({
        username:username
    }).exec(function(err,user){
        if(err){
        
            console.log(user);
        }
        else{
            console.log("Vinit's password "+password);
            console.log("Vinit's encrypted password password "+user.password);
            if (bcrypt.compareSync(password,user.password))
                {
                console.log('User found as',user);
                    var token=jwt.sign({username:user.username},'vinit',{expiresIn:3600});
            res.json({sucess:true,token:token});

                }
              else
                  {
                      console.log("User not found");
                      console.log(user);
                  }
        }
        
    })
    
    
};


module.exports.authenticate=function(req,res,next){
    var headers=req.headers.authorization;
    if (headers)
        {
            console.log(headers);
            var token=req.headers.authorization.split(' ')[1];
            console.log(token);
            jwt.verify(token,'vinit',function(err,doc)
                      {
                        if (err){
                            res.json('Invalid Taoken');
                        }
                        else{
                            req.user=doc.username;
                            console.log(req.user);
                            next();
                            
                        }
                
                
            });
            
            
            
        }else
            {
            res.json("Token is not available");
            }
    
    
}



