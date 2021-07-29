const express = require('express')
const router = express.Router()
const db = require('../db')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())


//GET ALL ADVICES FROM API /
router.get('/', async (req, res) => {
  try {
    let results = await db.all();
    res.json(results)
  } catch (e) {
    console.log(e.message);
  }
})

// GET SINGLE ADVICE WITH ID
router.get('/:id', async (req, res) => {
  try {
    let results = await db.one(req.params.id);
    res.json(results)
  } catch (e) {
    console.log(e.message);
  }
})

// Add SINGLE ADVICE WITH ID
router.post('/add', async (req, res) => {
  const tip = {
		advice: req.body.advice,
		categorie: req.body.categorie
	}

  try {
    let results = await db.add(tip);
    res.json(results)
  } catch (e) {
    console.log(e.message);
  }
})

// UPDATE SINGLE ADVICE
router.put('/update', async (req, res) => {
  const id = req.body.id;
  var tip = {
  advice: req.body.advice,
  categorie: req.body.categorie
}
  try {
    let results = await db.update(tip , id);
    res.json(results)
  } catch (e) {
    console.log(e.message);
  }
})

// DELETE SINGLE ADVICE
router.delete('/delete', async (req, res) => {
  const del_id = req.body.id
  try {
    let results = await db.del(del_id);
    res.json(results)
  } catch (e) {
    console.log(e.message);
  }
})


module.exports = router
