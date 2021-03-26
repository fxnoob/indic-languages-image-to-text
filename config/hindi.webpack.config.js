const baseConfig = require("../webpack.config");
module.exports = (env, options) => {
  return baseConfig(env, {
    ...options, // app specific configurations
    folderName: "hindi",
    langId: "hin",
    name: "Image to Text - Hindi (OCR)",
    description: "Image to Text - Hindi (OCR)",
    languageFile: "./scripts/tessdata/hin/hin.traineddata.gz",
  })
};