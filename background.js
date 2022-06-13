chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {
  if (changeInfo.status !== "complete") return;
  if(! tab.url) return;

  let configs = await getObjectFromLocalStorage('configs');
  if(! configs) return;

  configs.forEach(config => {
    let regex = new RegExp(config.url);
    if(! regex) return;
    if(tab.url.match(regex)){
      let message = { type: "notify", config: config };
      chrome.tabs.sendMessage(tabId, message, null);
      return;
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

const getObjectFromLocalStorage = async function(key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(key, function(value) {
        resolve(value[key]);
      });
    } catch (ex) {
      reject(ex);
    }
  });
};

const saveObjectInLocalStorage = async function(obj) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set(obj, function() {
        resolve();
      });
    } catch (ex) {
      reject(ex);
    }
  });
};
