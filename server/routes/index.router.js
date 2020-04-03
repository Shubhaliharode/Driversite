const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const ctrlUser = require("../controllers/user.controller");

const jwtHelper = require("../config/jwtHelper");

router.post("/register", ctrlUser.register);
router.post("/authenticate", ctrlUser.authenticate);
router.get("/userProfile", jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.put("/drivers/:id",ctrlUser.drivers);
// router.put("/userss/:id", function(req, res) {
//   console.log("Upadate user");
//     var user = new User();
//   User.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: {
//         fullName=req.body.fullName,
//         lastName: req.body.lastName,
//         password: req.body.password,
//         address: req.body.address,
//         city: req.body.city,
//         mob_no: req.body.mob_no,
//         pincode: req.body.pincode
//       }
//     },
//     {
//       new: true
//     },
//     function(err, updatedUser) {
//       if (err) {
//         res.send("Error updating video");
//       } else {
//         res.json(updatedUser);
//       }
//     }
//   );
// });
module.exports = router;
