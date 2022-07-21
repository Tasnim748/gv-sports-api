const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

// env config
dotenv.config();

// mongo server connection
const DB_URL = process.env.MONGODB_SERVER.replace('<password>', process.env.CLUSTER_PASSWORD);
console.log(DB_URL);
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to mongo server successfully'))
    .catch(() => console.log('connection failed :('));

// port declare
const port = process.env.PORT;

// server listen
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});