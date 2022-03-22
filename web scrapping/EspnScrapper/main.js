let url ="https://www.espncricinfo.com/series/ipl-2020-21-1210595"

const request = require("require");
const cheerio = require("cheerio");

request(url,cb);

function cb(err,res,body){
    if(err){
        console.log("error",err);
    } else {
    handleHTML(body);
    }
}

function handleHTML(html){
    let selecTool = cheerio.load(html);
    let anchorElem = selecTool('')
}