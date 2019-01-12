var fs = require("fs");
fs.readdir("./newfolder", (err, data) => {
  console.log(data);
});
