const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/my_databases');

mongoose.connection
  .once('open', (err, client) => {})
  .on('error', function(error) {});
