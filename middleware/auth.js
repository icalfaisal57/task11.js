import jwt from "jsonwebtoken";
const auth = (req,res,next)=>{
    //mengambil header auth
    const authorization = req.get("Authorization");
    //mengambil nilai token 
    const token = authorization && authorization.split(" ")[1];
    // cek jika header tikda dikirim
    if(!authorization){
        const response ={
            message : "please provide token"
        };
        res.status(401).json(response);
    }
    try{
        //cek jika token valid 
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        const response = {
            message : "Authetication failed"
        };
        res.status(401).json(response)
    }
};
export default auth;