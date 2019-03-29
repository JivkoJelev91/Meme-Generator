const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = 5000;
const path = require('path')


app.use(express.static(__dirname + '/public'));

app.use(cors());
app.options('*', cors()); // include before other routes
app.use(morgan('dev'));

require('./config/routes')(app);

app.listen(port, () => `Server running on ${port}`);