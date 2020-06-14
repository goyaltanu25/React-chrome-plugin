chrome.runtime.onMessage.addListener((request) => {
  if (request.message == "load") {
    chrome.extension.getURL("index.html");
  }
});
