const express = require("express");
const router = express.Router();
const nControll = require('../controller/ncontroll')


//create data
router.post('/nasabah', nControll.controllCreate);
//read data
router.get('/nasabah', nControll.controllGet);
//update data
router.patch('/nasabah/:id', nControll.controlUpdate);
//delete data
router.delete('/nasabah/:id', nControll.controlDelete);

module.exports = {
  nroute : router
}