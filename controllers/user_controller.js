
const Registation=require('../models/Reg')

module.exports.Registationpage=function(req,res){
    console.log("User Controller");
    return res.render('user',{
        titile : "User Page"
    })
}

// module.exports.user=function(req,res){
//     return res.render('user',{
//         title:"user"
//     })
// }



module.exports.create=async function(req,res){
    
    console.log("inside .create method",req.body)
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
   let preuser= await Registation.findOne({email: req.body.email}); 

        if (!preuser){
           await Registation.create(req.body); 

                return res.redirect('/user/das');
       
        }else{
            return res.redirect('back');
        }
}





// sign in and create a session for the user
module.exports.createSession = function(req, res){

    // steps to authenticate
    // find the user
    Registation.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing in'); return}
        // handle user found
        if (user){

            // handle password which doesn't match
            if (user.password != req.body.password){
                return res.redirect('back');
            }

            // handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/user/das');

        }else{
            // handle user not found

            return res.redirect('back');
        }


    });

 

    

    
}
