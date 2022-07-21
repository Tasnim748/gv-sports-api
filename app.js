const express = require('express');
const cors = require('cors');
const bookingRouter = require('./routers/bookingRouter')

const app = express();

// app config
app.use(cors());
app.use(express.json());

// route setups
app.use('/booking/', bookingRouter);

// export
module.exports = app;
