const axios = require("axios");
const cheerio = require("cheerio");
const { loadImage } = require("@napi-rs/canvas");

module.exports = async function (name, url) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const imageUrls = $(".contentsBox > * img")
    .map(function () {
      return $(this).attr("src");
    })
    .get();
  imageUrls.forEach(async (imgUrl) => {
    try {
      // canvasを使って画像が存在するか確認
      await loadImage(imgUrl); // 画像をロードして存在確認
      console.log(`name: ${name}, url: ${imgUrl}, exists: true`);
    } catch (error) {
      console.log(`name: ${name}, url: ${imgUrl} exists: false `);
    }
  });
};
