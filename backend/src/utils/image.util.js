const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const uploadSingleImage = async (folderName, base64Image) => {
  const base64Data = base64Image.replace(/^data:([A-Za-z-+\/]+);base64,/, "");
  const extension = base64Image.split(";")[0].split("/")[1];
  const imageName = `${uuidv4()}.${extension}`;
  return new Promise((resolve, reject) => {
    fs.writeFile(
      `public/${folderName}/${imageName}`,
      base64Data,
      "base64",
      (e) => {
        if (e) {
          return reject(e);
        }
        return resolve(imageName);
      }
    );
  });
};

module.exports = { uploadSingleImage };
