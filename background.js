chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {
  if (changeInfo.status !== "complete") return;
  if(! tab.url) return;

  let configs = await getObjectFromStorage('configs');
  if(! configs) return;

  configs.some(config => {
    let regex = new RegExp(config.url);
    if(! regex) return false;
    if(tab.url.match(regex)){
      let message = { type: "notify", config: config };
      chrome.tabs.sendMessage(tabId, message, null);
      return true;
    }
  });
});

chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.create({url: 'options.html'});
});

chrome.runtime.onInstalled.addListener(function(details){
  if(details.reason == "install"){
    chrome.runtime.openOptionsPage();
  }
});

const getObjectFromStorage = async function(key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(key, function(value) {
        resolve(value[key]);
      });
    } catch (ex) {
      reject(ex);
    }
  });
};
