//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/terumo2019'));
 
app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/terumo2019/index.html'));
});
 
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

//LINK: https://grokonez.com/frontend/angular/angular-deployment/how-to-deploy-angular-application-on-heroku-hosting-with-git-repository