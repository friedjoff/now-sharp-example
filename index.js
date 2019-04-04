const download = require("download");
const { tmpdir } = require("os");
const sharp = require("sharp");

const url =
  "https://raw.githubusercontent.com/technopagan/sqip/master/demo/monkey-selfie.jpg";

module.exports = async (req, res) => {
  await download(url, tmpdir());
  const image = sharp(tmpdir() + "/" + "monkey-selfie.jpg").resize({
    height: 100,
    width: 100
  });
  res.writeHead(200, { "Content-Type": "image/jpeg" });
  res.end(await image.jpeg().toBuffer());
};
