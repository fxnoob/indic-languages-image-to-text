const baseConfig = require("../webpack.config");
module.exports = (env, options) => {
  return baseConfig(env, {
    ...options, // app specific configurations
    folderName: "tamil",
    langId: "tam",
    name: "Image to Text - Tamil (OCR)",
    description: "Image to Text - Tamil (OCR)",
    languageFile: "./scripts/tessdata/tam/tam.traineddata.gz",
  })
};