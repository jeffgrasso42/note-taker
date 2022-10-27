// DEPENDENCIES
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// middlewares

// routes
app.use(routes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
