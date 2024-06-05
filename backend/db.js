
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cv')
  .then(() => console.log('Connected!')).catch(() => console.log('Not connected!'));