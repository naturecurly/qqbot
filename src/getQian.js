var request = require("request");
var url = 'http://i.itpk.cn/api.php?question=%E8%A7%82%E9%9F%B3%E7%81%B5%E7%AD%BE';

var getQ = function(){request({
	url:url,
	json:true
},function(error,response,body){
	if(!error&&response.statusCode ===200){
		console.log("签语: " + body.qianyu+"\n"+"解签: "+body.jieqian);
		return body.qianyu;
		//console.log(typeof(body.qianyu));
	}
});
};
module.exports = getQ;
