import jwt from "jsonwebtoken";
import { createError } from "../verify/error.js";

export const verifyToken = (req, res, next) => {
   const token = req.headers["acess_token"];                        //access token
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
//if no err verify
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));                  //verify token
    req.user = user;
    next();
  });
};
 
export const verifyUser = (req, res, next) => {                                      //verify user
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
       next();
         } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};


export const verifyAdmin = (req, res, next) => {                                 //verufy if admin
  console.log(req.user.isAdmin)
    if (!req.user.isAdmin ==true) {
      
      next();
    // } else {
    //      return next(createError(403, "You are not authorized!"));
    // }
  };
}