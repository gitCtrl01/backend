import { userModel } from "../model/User.model.js";

export default function PermissionCheck(permission) {
  return async (req, res, next) => {
    try {
      const userPraser = JSON.parse(req.cookies.userInfo);
      const user = await userModel.findById(userPraser._id).populate({
        path: "roles",
        select: "name",
        populate: {
          path: "permissions",
          select: "name",
        },
      });
      // console.log(user.roles[0].permissions[0].name, permission);
      // console.log(user.roles[0].permissions[0].name === permission);
      const adminChecker = user.roles.find((data) => {
        return data.name === "admin";
      });
      if (adminChecker) {
        console.log("admin bhai");
        next();
      } else {
        if (user.roles[0].permissions[0].name === permission) {
          next();
        } else {
          res.status(400).send("unauthorised");
        }
      }
    } catch (err) {
      res.status(400);
      res.send("unauthorised");
      throw new Error(err);
    }
  };
}
