const upload = require('../multer/uploadImg');
const path = require('path');

let global;
let arrayImg = [];

module.exports = app => {

    app.post('/upload', (req, res) => {
        upload(req, res, (err) => {
            console.log(req.file)
            if (err) {
                res.json({
                    error: err
                })
            }else{
                if(req.file == undefined){
                    res.json({
                        msg: 'Error: No File Selected!'
                    })
                }else{
                    res.json({
                        msg: 'File Uploaded!',
                        file: `uploads/${req.file.filename}`
                    })
                    arrayImg.push(req.file.filename);
                }
            }
        });
    });

    app.get('/upload', (req,res) => {
        if(arrayImg.length !== 0){
            res.json({
                img : arrayImg,
            });
        }
    });

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};