const userModel= require('../model/user.model');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(6);
const jwt = require('jsonwebtoken');

const register = async (req,res)=>{
  
    try {
        const {username,email,password,role}=req.body;

        if(username =='' || email=='' || password =="" || role==""){

            return (res.status(400).json({
                message:"Please Enter all the fields"
            }))
        }

        const user=await userModel.findOne({email});
        if(user){
            return res.status(200).json({
                message: 'User Already Exists',
                user
            })
        }

        const registerUser =await userModel.create({
            username:username,
            password:bcrypt.hashSync(password,salt),
            email:email,
            role:role,
        });

     
        res.status(200).send("success")

    } catch (error) {

        res.status(500).send("not stored")
        console.log(`Something went wrong in registration api ${error}`);
    }
}

const login= async (req,res)=>{
    try {
        const {email,password}=req.body;

        if(email =='' || password == ''){
            return res.status(400).json({
                message:"please enter all the fields"
            })
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(200).json({
                message:"user not found"
            })
        }
       
        if(user.password)
        {
            if(await bcrypt.compare(password,user.password)){
                const token = jwt.sign({user:user},process.env.SCRETE_KEY,{expiresIn:'24h'});
                return res.status(200).json({
                    success:true,
                    message:"Success",  
                    user,
                    token
                })
            }
            else {
                return res.status(400).send("password not matched")
            }
        } 
        else{
            return res.status(400).json({
                message:"Password is incorrect"
            })
        }       
    } catch (error) {
        res.status(500).json({
            error
        })
        console.log("Something wrong during login",error);
    }
}
module.exports={register,login}