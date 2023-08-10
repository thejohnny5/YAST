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

const updateTags = setOfImgs => {
    console.log(setOfImgs);
    //for (let img of setOfImgs) {
    //    let imgTag = new Image();
    //    imgTag.src = img;
    //    document.getElementById('body').appendChild(imgTag);
    //}

        
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message) {
      console.log('received')
      
    }
  });
//chrome.runtime.sendMessage({ action: 'updatePopup' });

/**
 * Sends a message to the content.js letting it know that the download images button was clicked.
 * @param {Object} message The message from the popup.js to the content.js
 */
function sendMessageToContentScript(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message, console.log);
    });
  }

/**
 * Waits until index is loaded before adding an event listener.
 */
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('test_button');
    btn.addEventListener('click', function() {
        sendMessageToContentScript({"action":"clicked"})
        alert("button clicked");
    });
});

//console.log(globalImgs)




