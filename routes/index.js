const router = require('express').Router();
const { read, read_write} = require('../helpers/fsUtils');

router.get('/notes', (req, res) =>{
    try{
        read('./db/db.json').then((notes) => res.json(JSON.parse(notes)));
    } catch(err){
        console.error(err);
    }
});

router.post('/notes', (req, res) =>{
    try{
        const { title, text} = req.body;
        const newNote = { title, text };
        read_write(newNote, './db/db.json');
    } catch(err){
        console.error(err);
    }
});
  

module.exports = router;
