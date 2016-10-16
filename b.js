var fs=require("fs");

fs.readFile(__dirname+"/c.txt",function (err,data) {
	// body...
	if (err) {
		throw err;
	}
	console.log(data)
})