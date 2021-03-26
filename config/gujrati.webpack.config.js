const baseConfig = require("../webpack.config");
module.exports = (env, options) => {
  return baseConfig(env, {
    ...options, // app specific configurations
    folderName: "gujrati",
    langId: "guj",
    name: "Image to Text - Gujrati (OCR)",
    description: "Image to Text - Gujrati (OCR)",
    languageFile: "./scripts/tessdata/guj/guj.traineddata.gz",
  })
};