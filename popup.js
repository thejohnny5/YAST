/*const node = document.createElement('div')
node.setAttribute('id', 'test');
node.innerHTML = "This is a test";
const body = document.querySelector('images');
body.appendChild(node);

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type:"getText"}, function(response){
        alert(response)
        $("#text").text(response);
    });
});*/
//import { globalImgs } from "./main";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message) {
      console.log('received')
    }
  });
//chrome.runtime.sendMessage({ action: 'updatePopup' });
function sendMessageToContentScript(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('test_button');
    btn.addEventListener('click', function() {
        sendMessageToContentScript({"action":"clicked"})
        alert("button clicked");
    });
});

//console.log(globalImgs)




