const express = require('express');
const cors = require('cors');
const compression = require('compression');
const bookingRouter = require('./routers/bookingRouter')

const app = express();

// app config
app.use(compression());
app.use(cors());
app.use(express.json());

// route setups
app.use('/booking/', bookingRouter);

// export
module.exports = app;
