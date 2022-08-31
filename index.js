const express = require('express');
const app = express();
const port = 5000;
const leagueRouter = require('./routes/league');

app.use('/league', leagueRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})