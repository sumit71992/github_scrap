var fetchUrl = require("fetch").fetchUrl;
function index(req,res){
  res.render("index",{data: ""});
}

async function getPost(req, res) {
 await fetchUrl(
    "https://api.github.com/orgs/octokit/repos?page=1&per_page=10",async function(err, meta, body){
      const postData = JSON.parse (body);
      //console.log("postData", postData[6]);
      return res.render("index", { data: postData})
    }
    
  );
}
module.exports ={
  index,
  getPost
}