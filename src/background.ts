import fetchApi from "~libs/fetchApi";

console.log("Welcome to ExNicoExtension!!!");

chrome.runtime.onMessageExternal.addListener(async (message: Message, sender, sendResponse) => {
  const manifest = chrome.runtime.getManifest();
  switch (message.type) {
    case "getVersion":
      sendResponse(manifest.version);
      break;
    case "fetchApi":
      if(message.payload.url && message.payload.method){
        const res = await fetchApi(message.payload.url, message.payload.method, message.payload.param, message.payload.header);
        sendResponse(res);
      }
      else{
        sendResponse(null);
      }
      break;
    default:
      break;
  }
});

export {}
