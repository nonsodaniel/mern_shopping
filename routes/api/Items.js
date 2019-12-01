const express = require("express");
const router = express.Router()

//item model
const Item = require('../../models/Items')


//@route    GET api/items
//@desc     Get all public Items
//@access   Public
router.get('/', (req, res) => {
    Item.find().sort({ date: -1 }).then(items => res.json(items))
})

router.post('/', (req, res) => {
    let { name } = req.body;
    const newItem = new Item({ name })
    newItem.save().then(item => res.json(item))
})

module.exports = router;