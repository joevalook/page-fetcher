const fs = require('fs')
const request = require('request');
info = process.argv.slice(2)
const [url, path] = info
console.log(info);
const saveRequestToFile = function(info, functionToRunWhenThingsAreDone) {
  request(url, (error, _, body) => {
    if (error !== null) {
      console.log('error:', error); // Print the error if one occurred
    }
    fs.writeFile(path, body, err => {
      if (err) {
        console.error(err)
        return
      }
      if (!error) functionToRunWhenThingsAreDone(body.length, path);
      //file written successfully
    })
  });
}
const successMsg = (bytes, location) => {
  console.log(`downloaded and saved ${bytes} bytes to ${location}` ) // => print out details correctly.
};

saveRequestToFile(info, successMsg);