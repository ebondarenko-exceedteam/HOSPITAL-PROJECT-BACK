const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const apiRoutes = require('./src/modules/routes/routes');

app.use(cors());

const uri = 'mongodb+srv://ebondarenko-exceedteam:Restart987@cluster0.5337u.mongodb.net/Hospital?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());
app.use('/', apiRoutes);

app.listen(8000, () => {
  console.log('Server started on port 8000...');
});