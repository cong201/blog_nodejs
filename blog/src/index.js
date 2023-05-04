const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 8000;
const axios = require('axios');
const cors = require('cors');
const router = require('./router');
const db = require('./config/db');
const methodOverride = require('method-override');


//connect to db

db.connect();


app.use(methodOverride('_method'))

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    }),
);


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

app.engine(

    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource','views'));

router(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
