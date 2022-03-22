const request = require("request");
const cheerio = require("cheerio");

function getInfoFromScorecard(url){
    // we have url of a scorecard and we want a html of the scorecard 
    // console.log("from scorecards.js",url);
    request(url,cb);
}
function cb(err,res,body){
    if(err){
        console.log(err);
    }
    else { 
        getMatchDetails(body);
    }
}
function getMatchDetails(html){
    //selector tool contains html of ith scorecard
    let selecTool = cheerio.load(html);
    //1 get venue
    //2 get date
    //we have used descended slector below
    let desc = selecTool(".match-header-info.match-info-MATCH");
    // console.log(desc.text());
    let decArr= desc.text().split(",");
    //Match (N), Abu Dhabi, Oct 25 2020, Indian Premier League
    // console.log(descArr);
    let dateOfMatch = decArr[2];
    let venueOfMatch = decArr[1];
    console.log("Date of the Match : "+dateOfMatch);
    console.log("Venue of the match : " +venueOfMatch);
    //3 get result
    let matchResult =selecTool(
        ".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text");
        console.log("Result : "+matchResult.text());

    //4 get team names

}
//visit every scorecard and get the info
module.exports = {
    gifs:getInfoFromScorecard
}