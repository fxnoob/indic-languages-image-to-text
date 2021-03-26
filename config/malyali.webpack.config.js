const baseConfig = require("../webpack.config");
module.exports = (env, options) => {
  return baseConfig(env, {
    ...options, // app specific configurations
    folderName: "malayalam",
    langId: "mal",
    name: "Image to Text - Malayalam (OCR)",
    description: "Image to Text - Malayalam (OCR)",
    languageFile: "./scripts/tessdata/mal/mal.traineddata.gz",
  })
};