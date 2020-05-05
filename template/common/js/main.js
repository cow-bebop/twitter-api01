var Twitter = require("twitter");

var client = new Twitter({
  consumer_key: "Thba4G67l1PTf5CtOCxXmz258",
  consumer_secret: "hTPHAFw3QexFDm33LW1b70FzNXo6JTP6oWuRKVzp6uOBF6c75N",
  access_token_key: "1026774766793805824-BIpZqh8i6ZDtfF4KJDBKwQElss1p9w",
  access_token_secret: "tQJpBMTRRwRVGXU7JNFm0c3LcCN3xjM2DkhNVhsEmuHxO"
});

var params = { screen_name: "nodejs" };
client.get("statuses/user_timeline", params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
