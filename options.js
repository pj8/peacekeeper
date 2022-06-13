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

document.getElementById("saveConfigs").addEventListener("click",async function(e){
  if(document.getElementById("textareaConfigs").value){
    let jsonConfigs = JSON.parse(document.getElementById("textareaConfigs").value);
    await saveObjectInLocalStorage({'configs': jsonConfigs});
    alert('Configs are saved.');
  }
},false);

(async function() {
  let configs = await getObjectFromLocalStorage('configs');
  if(configs){
    document.getElementById("textareaConfigs").innerHTML = JSON.stringify(configs, null, 2);
  }
})();
