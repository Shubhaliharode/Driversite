const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");

const User = mongoose.model("User");
module.exports.drivers=(req,res)=>{
  var user = new User();
  console.log("users updating");
  // user.findByIdAndUpdate(
     req.params.id,
     {
       $set: {
         fullName:req.body.fullName,
         lastName: req.body.lastName,
         password: req.body.password,
         address: req.body.address,
         city: req.body.city,
         mob_no: req.body.mob_no,
         pincode: req.body.pincode
       }
     },
     {
       new: true
     },
     function(err, updatedUser) {
       if (err) {
         res.send("Error updating video");
       } else {
         res.json(updatedUser);
       }
     }
  //  );
 };

module.exports.register = (req, res, next) => {
  var user = new User();
  user.fullName = req.body.fullName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.password = req.body.password;
  user.address = req.body.address;
  user.city = req.body.city;
  user.mob_no = req.body.mob_no;
  user.pincode = req.body.pincode;
  user.save((err, doc) => {
    if (!err) res.send(doc);
    else {
      if (err.code == 11000)
        res.status(422).send(["Duplicate email adrress found."]);
      else return next(err);
    }
  });
};

module.exports.authenticate = (req, res, next) => {
  // call for passport authentication
  passport.authenticate("local", (err, user, info) => {
    // error from passport middleware
    if (err) return res.status(400).json(err);
    // registered user
    else if (user) return res.status(200).json({ token: user.generateJwt() });
    // unknown user or wrong password
    else return res.status(404).json(info);
  })(req, res);
};

module.exports.userProfile = (req, res, next) => {
  User.findOne({ _id: req._id }, (err, user) => {
    if (!user)
      return res
        .status(404)
        .json({ status: false, message: "User record not found." });
    else
      return res.status(200).json({
        status: true,
        user: _.pick(user, [
          "fullName",
          "lastName",
          "email",
          "address",
          "mob_no",
          "city",
          "pincode"
        ])
      });
  });
};
module.exports.editprofile = (req, res, next) => {
  var user = new User();
  user.address = req.body.address;
  user.city = req.body.city;
  user.mob_no = req.body.mob_no;
  user.pincode = req.body.pincode;
  user.save((err, doc) => {
    if (!err) res.send(doc);
    else {
      if (err.code == 11000)
        res.status(422).send(["Duplicate eeeemail adrress found."]);
      else return next(err);
    }
  });
};
