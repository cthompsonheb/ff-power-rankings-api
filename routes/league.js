const express = require('express');
const router = express.Router();

// Require controller modules.
const league_data_controller = require('../controllers/leagueDataController');

router.get('/boxscore/:id', league_data_controller.getWeeklyBoxscore);

module.exports = router;