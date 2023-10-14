const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/home', (req, res) => {
    return res.status(200).send({
        message: 'Selamat datang di aplikasi gerakanamal API',
    });
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Aplikasi berjalan di port ${port}`);
});