const express = require('express'),
path= require['path'];

const app = express();

app.use(express.static('./dist/terumo2019'));

app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname,'/dist/terumo2019/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server started');
})