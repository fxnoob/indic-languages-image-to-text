const baseConfig = require("../webpack.config");
module.exports = (env, options) => {
  return baseConfig(env, {
    ...options, // app specific configurations
    folderName: "bengali",
    langId: "ben",
    name: "Image to Text - Bengali (OCR)",
    description: "Image to Text - Bengali (OCR)",
    languageFile: "./scripts/tessdata/ben/ben.traineddata.gz",
  })
};