import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createError } from "../verify/error.js";
//logic for user login & register
export const register=async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);   //hash pass obtained from body  
        const newUser=new User({
            username:req.body.username,
            password:hash   
        })
        await newUser.save()
        res.status(200).send(newUser)
    }catch(err){
        next(err)
    }
}

export const login=async(req,res,next)=>{
    try {
         const user = await User.findOne({ username: req.body.username });
         if (!user) return next(createError(404, "User not found!"));
    console.log(req.body)
         const isPasswordCorrect = await bcrypt.compare(
                req.body.password,
          user.password
        );
        if (!isPasswordCorrect)
          return next(createError(400, "Wrong password or username!"));
    
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },                                 //cookie contains 
          process.env.JWT
        );
    
        const { password, isAdmin, ...otherDetails } = user._doc;
          res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({ details: { ...otherDetails }, isAdmin });
      } catch (err) {
        next(err);
      }
}
// export const login = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     if (!user) return next(createError(404, "User not found!"));

//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordCorrect)
//       return next(createError(400, "Wrong password or username!"));

//     const token = jwt.sign(
//       { id: user._id, isAdmin: user.isAdmin },
//       process.env.JWT,
//       { expiresIn: "1h" }
//     );

//     const { password, isAdmin, ...otherDetails } = user._doc;
//     res.status(200).json({
//       token,
//       user: { ...otherDetails, isAdmin },
//     });
//   } catch (err) {
//     next(err);
//   }
// };