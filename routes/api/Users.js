const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
//item model
const User = require("../../models/User");

//@route    GET api/users
//@desc     Get all public users
//@access   Public
router.get("/", (req, res) => {
  res.send("Hello");
  //   Item.find()
  //     .sort({ date: -1 })
  //     .then(users => res.json(users));
});

router.post("/", (req, res) => {
  let { name, email, password } = req.body;
  console.log(req.body);
  //simple validation
  if (!name || !email || !password) {
    return res.json({ msg: "Please enter all fields" });
  } else {
    //check for existing user
    User.findOne({ email }).then(user => {
      if (user) {
        return res.json({ msg: "User already exists" });
      }
      const newUser = new Item({ name, email, password });
      //create salt and hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
            res.json({ user: { name, email, password } });
          });
        });
      });

      newUser.save().then(user => res.json(user));
    });
  }
});

router.delete("/:itemId", (req, res) => {
  Item.findById(req.params.itemId)
    .then(item => item.remove().then(() => res.json({ item, success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
