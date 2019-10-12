const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes/apiRoutes'));

app.listen(PORT, function() {
  console.log(`App listening on PORT: ${PORT}`);
});
