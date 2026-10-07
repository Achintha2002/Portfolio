const fs = require('fs');

console.log("Checking if sharp or canvas or jimp exists");
try {
  require('sharp');
  console.log("sharp is available");
} catch(e) {
  console.log("sharp not found");
}
