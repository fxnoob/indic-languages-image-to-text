const baseConfig = require("../webpack.config");
module.exports = (env, options) => {
  return baseConfig(env, {
    ...options, // app specific configurations
    folderName: "panjabi",
    langId: "pan",
    name: "Image to Text - Panjabi (OCR)",
    description: "Image to Text - Panjabi (OCR)",
    languageFile: "./scripts/tessdata/pan/pan.traineddata.gz",
  })
};