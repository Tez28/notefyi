const router = require('express').Router();
const fs = require('fs');

const db = require('../db/db.json');

router.get("/notes", (req,res) => {
    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        res.send(dbData);
    });
    
});

router.post("/notes", (req,res) => {
    const inputNotes = req.body;

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        dbData.push(userNotes);
        let number = 1;
        dbData.forEach((note, index) => {
            note.id = number;
            number++;
            return dbData;
        });
        console.log(dbData);
        dataString = JSON.stringify(dbData);

        fs.writeFile('../db/db.json', dataString, (err, data) => {
            if(err) throw err;
        });
    });
    res.send('Note added!')
});

module.exports = router