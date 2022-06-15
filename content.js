(function() {
  chrome.runtime.onMessage.addListener(
    async function(message, sender, callback) {
      if (message.type === "notify") {
        let body = document.querySelector('html body');
        let config = message.config;

        // alert
        if(config.alert){
          alert(config.alert);
        }

        // style
        if(config.style){
          body.style.backgroundColor = config.style.backgroundColor;
        }

        // favicon
        if(config.favicon){
          document.querySelectorAll("link[rel=icon]").forEach((element) => element.remove());
          let favicon;
          favicon = document.createElement('link');
          favicon.rel = config.favicon.rel;
          favicon.type = config.favicon.type;
          favicon.href = config.favicon.href;
          document.getElementsByTagName('head')[0].appendChild(favicon);
        }

        // toast
        if(config.toast){
          Swal.fire({
            position: config.toast.position,
            icon: config.toast.icon,
            title: config.toast.title,
            showConfirmButton: config.toast.showConfirmButton,
            timer: config.toast.timer
          });
        }
      }
    }
  );
})();
