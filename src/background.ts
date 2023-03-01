console.log("Welcome to ExNicoExtension!!!");

chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  const manifest = chrome.runtime.getManifest();
  switch (message.type) {
    case "getVersion":
      sendResponse(manifest.version);
      break;
    default:
      break;
  }
});

export {}
