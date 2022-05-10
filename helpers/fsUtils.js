const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile);

const write = (file, note) =>{
    try{
        fs.writeFile(file, JSON.stringify(note), () => {
            console.log('success')
        });
    } catch(err){
        console.error(err);
    }
};

const read_write = (note, file) => {
    try{
        fs.readFile(file, 'utf8', (err, data) => {
            const parsedData = JSON.parse(data);
            parsedData.push(note);
            write(file, parsedData);
        });
    } catch(err){
        console.error(err);
    }
    
};

module.exports = { read, write, read_write };