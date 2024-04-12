chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (changeInfo.status !== "complete") return;
  if (!tab.url) return;

  let configs = await getObjectFromStorage("configs");
  if (!configs) return;

  let matchedConfig = getMatchedConfig(tab.url, configs);
  chrome.tabs.sendMessage(
    tabId,
    { type: "notify", config: matchedConfig },
    null
  );
});

function getMatchedConfig(url, configs) {
  const urlObj = new URL(url);
  const originAndPath = urlObj.origin + urlObj.pathname;
  return configs.find((config) => originAndPath.match(new RegExp(config.url)));
}

chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: "options.html" });
});

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    chrome.runtime.openOptionsPage();
  }
});

const getObjectFromStorage = async function (key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(key, function (value) {
        resolve(value[key]);
      });
    } catch (ex) {
      reject(ex);
    }
  });
};
