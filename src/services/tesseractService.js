import { createWorker } from "tesseract.js";

const service = {};

service.initTesser = async () => {
  const worker = createWorker({
    workerPath: chrome.runtime.getURL("js/worker.min.js"),
    langPath: chrome.runtime.getURL("traineddata"),
    corePath: chrome.runtime.getURL("js/tesseract-core.wasm.js")
  });
  await worker.load();
  await worker.loadLanguage(process.app.langId); // check webpack config for langId value
  await worker.initialize(process.app.langId);// check webpack config for langId value
  return worker;
};

export default service;
