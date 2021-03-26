const baseConfig = require("../webpack.config");
module.exports = (env, options) => {
  return baseConfig(env, {
    ...options, // app specific configurations
    folderName: "telugu",
    langId: "tel",
    name: "Image to Text - Telugu (OCR)",
    description: "Image to Text - Telugu (OCR)",
    languageFile: "./scripts/tessdata/tel/tel.traineddata.gz",
  })
};