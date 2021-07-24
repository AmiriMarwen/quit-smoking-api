const express = require('express')
const router = express.Router()
const db = require('../db')

// Route for /
router.get('/'  , async (req , res) => {
  try {
    let results = await db.all();
    res.json(results)
  } catch (e) {
    console.log(e.message);    
  }
})


module.exports = router
