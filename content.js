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
          let script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.4.17/dist/sweetalert2.all.min.js';
          let child = document.getElementsByTagName('script')[0];
          child.parentNode.insertBefore(script, child);
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
