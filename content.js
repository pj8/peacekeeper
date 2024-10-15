(function () {
  chrome.runtime.onMessage.addListener(async function (
    message,
    sender,
    callback
  ) {
    if (message.type !== "notify") {
      return;
    }

    if (!message.hasOwnProperty("config")) {
      return;
    }

    let body = document.querySelector("html body");
    let config = message.config;

    // alert
    if (config.alert) {
      alert(config.alert);
    }

    // style
    if (config.style) {
      Object.assign(body.style, config.style);
    }

    // favicon
    if (config.favicon) {
      document
        .querySelectorAll("link[rel=icon]")
        .forEach((element) => element.remove());
      let favicon;
      favicon = document.createElement("link");
      favicon.rel = config.favicon.rel;
      favicon.type = config.favicon.type;
      favicon.href = config.favicon.href;
      document.getElementsByTagName("head")[0].appendChild(favicon);
    }
  });
})();
