import jwt from "jsonwebtoken"


const auth = async(req,res,next) => {
    const token = req.headers('authorization').repalce('Bearer','');
    if(!token){
        return res.status(401).json({success:false,message:"Unauthorized"});

    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = {userId:decoded.id}
        next();
    }catch(error){
         res.status(401).send({error:"please authendicate."});
    }
}

export default auth;    