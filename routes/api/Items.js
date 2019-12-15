const express = require("express");
const router = express.Router();
const validate = require("../../middleware/auth");
//item model
const Item = require("../../models/Items");

//@route    GET api/items
//@desc     Get all public Items
//@access   Public
router.get("/", validate, (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

router.post("/", validate, (req, res) => {
  let { name } = req.body;
  const newItem = new Item({ name });
  newItem.save().then(item => res.json(item));
});

router.delete("/:itemId", (req, res) => {
  Item.findById(req.params.itemId)
    .then(item => item.remove().then(() => res.json({ item, success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
