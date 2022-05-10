const router = require('express').Router()
const { v4: uuidv4 } = require('uuid');
const { read, write, read_write} = require('../helpers/fsUtils');

router.get('/notes', (req, res) =>{

});

router.post('/notes', (req, res) =>{

});
  

module.exports = router;
