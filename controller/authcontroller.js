import bcrpyt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"
class authcontroller{
    async register(req,res){
        const {username, email, password} = req.body;
        const hash = await bcrpyt.hash(password, 10);
        const newUser = await User.create({
            username : username,
            email:email,
            password:hash,
        });
        const response = {
            message : "user created succesfully",
            data : newUser
        };
        return res.status(201).json(response)
    }
    async login(req,res){
        const {username, password} = req.body;

        const user=await User.findOne({where : {username : username}});
        const match= await bcrpyt.compare(password, user.password);
        //cek jika user atau password salah
        if(!user||!match){
            const response ={
                message: "authetication failed"
            };
            return res.status(401).json(response)   
        }
        else{
            const payload = {
                id: user.id,
                username: user.username
            };
            
            const secret = process.env.TOKEN_SECRET;
            const token = jwt.sign(payload, secret, { expiresIn: "1h" });
            
            const response = {
                message: "login success",
                data: {
                    token: token,
                },
            };
            
            return res.status(200).json(response);            
    }
}
}

//membuat object auth
const auth = new authcontroller();
export default auth;

