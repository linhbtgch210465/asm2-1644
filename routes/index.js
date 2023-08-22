var express = require('express');
const ToyLegoModels = require('../models/ToyLegoModels');
const ToyCarModels = require('../models/ToyCarModels');
const ToyPlyCamModels = require('../models/ToyPlyCamModels');
var router = express.Router();

router.get('/', async (req, res) => {

  res.render('index')
})

router.get('/adminlego', async (req, res) => {
  var toyLegos = await ToyLegoModels.find({});
  var total = await ToyLegoModels.count();
  res.render('adminlego', { toyLegos : toyLegos , total : total })
})
router.get('/admincar', async (req, res) => {
  var toyCars = await ToyCarModels.find({});
  var total = await ToyCarModels.count();
  res.render('admincar', { toyCars : toyCars , total : total })
})
router.get('/adminflycam', async (req, res) => {
  var toyPlyCams = await ToyPlyCamModels.find({});
  var total = await ToyPlyCamModels.count();
  res.render('adminflycam', { toyPlyCams : toyPlyCams , total : total })
})

router.get('/listflycam', async (req, res) => {
  var toyPlyCams = await ToyPlyCamModels.find({});
  res.render('listflycam', { toyPlyCams: toyPlyCams });
})

router.get('/listlego', async (req, res) => {
  var toyLegos = await ToyLegoModels.find({});
  res.render('listlego', { toyLegos: toyLegos });
})
router.get('/listcar', async (req, res) => {
  var toyCars = await ToyCarModels.find({});
  res.render('listcar', { toyCars: toyCars });
})

router.get('/deletelego/:id', async(req, res) => {
  await ToyLegoModels.findByIdAndDelete(req.params.id)
  .then(() => { console.log ('Delete succeed !')})
  .catch((err) => { console.log ('Delete failed !')});

  res.redirect('/adminlego');
})
router.get('/deletecar/:id', async(req, res) => {
  await ToyCarModels.findByIdAndDelete(req.params.id)
  .then(() => { console.log ('Delete succeed !')})
  .catch((err) => { console.log ('Delete failed !')});

  res.redirect('/admincar');
})


router.get('/drop', async(req, res) => {
  await ToyLegoModels.deleteMany({})
  .then(() => { console.log ('Delete all succeed !')});
  
  res.redirect('/adminlego');
})

router.get('/drop', async(req, res) => {
  await ToyCarModels.deleteMany({})
  .then(() => { console.log ('Delete all succeed !')});
  
  res.redirect('/admincar');
})
router.post('/order', async (req, res) => {
  var id = req.body.id;
  var toyLegos = await ToyLegoModels.findById(id);
  var order_quantity = req.body.order_quantity;
  var price = req.body.price;
  var total_price = price * order_quantity;
  res.render('order_confirm', { toyLegos: toyLegos, order_quantity : order_quantity, total_price : total_price});
})

router.get('/detailcar/:id', async (req, res) => {
  var id = req.params.id;
  var toyCars = await ToyCarModels.findById(id);
  res.render('detailcar', { toyCars : toyCars});
})

router.get('/detaillego/:id', async (req, res) => {
  var id = req.params.id;
  var toyLegos = await ToyLegoModels.findById(id);
  res.render('detaillego', { toyLegos : toyLegos});
})

router.get('/addlego', (req, res) => {
  res.render('addlego');
})

router.post('/addlego', async (req, res) => {
  var toyLegos = req.body;
  await ToyLegoModels.create(toyLegos)
  .then(() => { console.log ('Add new toy succeed !')});
  res.redirect('/adminlego');
})

router.get('/addcar', (req, res) => {
  res.render('addcar');
})

router.post('/addcar', async (req, res) => {
  var toyCars = req.body;
  await ToyCarModels.create(toyCars)
  .then(() => { console.log ('Add new toy succeed !')});
  res.redirect('/admincar');
})

router.get('/addflycam', (req, res) => {
  res.render('addflycam');
})

router.post('/addflycam', async (req, res) => {
  var toyPlyCams = req.body;
  await ToyPlyCamModels.create(toyPlyCams)
  .then(() => { console.log ('Add new toy succeed !')});
  res.redirect('/adminflycam');
})


router.get('/editlego/:id', async (req, res) => {
  var toyLegos = await ToyLegoModels.findById(req.params.id);
  res.render('editlego', { toyLegos : toyLegos});
})

router.post('/editlego/:id', async (req, res) => {
  var id = req.params.id;
  var updatedData=req.body;
  await ToyLegoModels.findByIdAndUpdate(id,updatedData)
     .then(() => { console.log('Edit toy succeed!') });
  res.redirect('/adminlego');
})
router.get('/editcar/:id', async (req, res) => {
  var toyCars = await ToyCarModels.findById(req.params.id);
  res.render('editcar', { toyCars : toyCars});
})

router.post('/editcar/:id', async (req, res) => {
  var id = req.params.id;
  var updatedData=req.body;
  await ToyCarModels.findByIdAndUpdate(id,updatedData)
     .then(() => { console.log('Edit toy succeed!') });
  res.redirect('/admincar');
})
// router.get('/home', function(req, res, next) {
//   res.render('home');
// });

module.exports = router;