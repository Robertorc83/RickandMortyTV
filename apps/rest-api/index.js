const express = require('express');
const cors = require('cors');
const videoRoutes = require('./src/interfaces/routes/videoRoutes');

const app = express();
app.use(cors());
app.use('/video', videoRoutes);

const port = 3001;

app.listen(port, () => {
  console.log(`REST API running at http://localhost:${port}`);
});