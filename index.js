const sharp = require('sharp')

module.exports = async (req, res) => {
  const image = sharp('input.jpg').resize({
    height: 100,
    width: 100
  })
  res.writeHead(200, { 'Content-Type': 'image/jpeg' })
  res.end(await image.jpeg().toBuffer())
};