const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
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
  let { email, password } = req.body;
  console.log(req.body);
  //simple validation
  if (!email || !password) {
    return res.json({ msg: "Please enter all fields" });
  } else {
    //check for existing user
    User.findOne({ email }).then(user => {
      let { id, email } = user;
      if (!user) {
        return res.json({ msg: "User doesn't exists" });
      }
      //   const newUser = new Item({ name, email, password });
      //validate password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch)
          return res.status(400).json({ msg: "Invalid credentials" });

        jwt.sign(
          { id, email },
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
              }
            });
          }
        );
      });
    });
  }
});

// router.delete("/:itemId", (req, res) => {
//   Item.findById(req.params.itemId)
//     .then(item => item.remove().then(() => res.json({ item, success: true })))
//     .catch(err => res.status(404).json({ success: false }));
// });

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;
