const globalImgs = new Set();

/**
 * Finds the images based on the class name and adds them to a set.
 */
function findImg (){
    console.log('Ran find image')
    const pageNode = document.getElementsByClassName('rg_i Q4LuWd');

    
    //console.log(pageNode);
    for (let img of pageNode) {
        //console.log(element)
     
        if (img.src !== '' || img.src.startsWith('data:image')) {
            globalImgs.add(img.src);
        }
    }

    

}
findImg();
//console.log(globalImgs);

/**
 * Downloads all the images with a delay of 1 second
 */
function downloadAllImgs(){
    // let imageBody = document.querySelector('images');
    let multiple = 1;
    for (let value of globalImgs){
        
        setTimeout(()=>{
            downloadImage(value);
            //console.log(value);
        }, 1000 * multiple);
        multiple++; 
    }
}

/**
 * Listens for a message from the popup. When it gets the button click, it begins to download the images.
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message) {
      downloadAllImgs();
      //console.log(globalImgs);
      sendResponse(globalImgs);
    }})
//addImg();

/**
 * Gets the image url and creates an object. Puts it into the a tag with a clickable ability to download the image
 * Clicks the image which downloads the image. Removes the created node.
 * 
 * @param {string} imageSrc Image url
 */
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    
    const link = document.createElement('a')
    link.href = imageURL
    link.download = document.getElementsByClassName('og3lId')[0].value
    //console.log('Image download')
    //console.log(link);
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

//addImg();

//chrome.runtime.sendMessage({action: "updatePopup"})
/*
function checkForSelection(event) {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
    const selectedHTML = event.target;
    console.log(selectedHTML);
    //findImg(selectedHTML.outerHTML);
    //findImg(selectedHTML);
    }
    
}
*/

//onsole.log(findImg());

// export {globalImgs}
