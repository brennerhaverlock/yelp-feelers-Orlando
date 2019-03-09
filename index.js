const express = require('express');
const helmet = require('helmet')
const app = express();


app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//==============================================================// CORS setup
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "Origin, Accept, Content-Type, Authorization, X-Requested-With");
    res.setHeader('Access-Control-Allow-Methods', "POST,GET,OPTIONS,DELETE,PUT");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
})

//==============================================================// ROUTES
const storesRoutes = require('./routes/stores');

app.use('/stores', storesRoutes)


const PORT = process.env.PORT || '4200'
app.listen(PORT, () => {console.log(`Listening on port ${PORT}...`)})