const express = require('express');
const { v4: uuid } = require('uuid');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const app = express();
const os = require('os');
const { errorMonitor } = require('events');
const {logEvents, requestLogger} = require('./middleware/logEvents.js');
const PORT = process.env.PORT || 3000;

app.use(requestLogger);

app.use(express.static(path.join(__dirname, '../','public')));

app.use('/testerror', require('./routes/testerror.route.js'))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 