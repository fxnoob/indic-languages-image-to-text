const baseConfig = require("../webpack.config");
module.exports = (env, options) => {
  return baseConfig(env, {
    ...options, // app specific configurations
    folderName: "Kannada",
    langId: "kan",
    name: "Image to Text - Kannada (OCR)",
    description: "Image to Text - Kannada (OCR)",
    languageFile: "./scripts/tessdata/kan/kan.traineddata.gz",
  })
};