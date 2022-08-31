require('dotenv').config()

const { Client } = require('espn-fantasy-football-api/node');

const getClient = () => {
    const leagueId = process.env.LEAGUE_ID;
    const SWID = process.env.SWID;
    const espnS2 = process.env.ESPN_S2;
    const client = new Client({ leagueId });
    client.setCookies({ espnS2, SWID });
    return client;
};

const getWeeklyBoxscore = async (req, res) => {
    const client = getClient();
    const seasonId = parseInt(process.env.SEASON_ID);
    const week = parseInt(req.params.id);
    const scores = await client.getBoxscoreForWeek({seasonId: seasonId, matchupPeriodId: week, scoringPeriodId: week});
    res.send(scores);
};

exports.getWeeklyBoxscore = getWeeklyBoxscore;