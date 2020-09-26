const fs = require("fs");
const { promisify } = require("util");

const readDir = promisify(fs.readdir);
const readStat = promisify(fs.stat);

/* fs.readdir("./", function (err, files) {
  if (err) {
    console.log("Error finding files: " + err);
  } else {
    files.forEach(function (filename, fileIndex) {
      //   console.log(filename);
      fs.stat(filename, (err, stats) => {
        if (err) {
          console.log(err);
        }
        console.log(stats);
        console.log("========");
      });
    });
  }
});  */

const p1 = readDir("./kftuh/")
  .then((files) => {
    return Promise.all(
      files.map((file) => {
        return readStat(file);
      })
    );
  })
  .then((stats) => {
    console.log(stats);
  })
  .catch((err) => {
    console.log(err);
  });
