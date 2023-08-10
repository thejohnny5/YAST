let globalImgs;

function findImg (){
    console.log('Ran find image')
    const pageNode = document.getElementsByClassName('rg_i Q4LuWd');

    
    const imgSrcs = [];
    console.log(pageNode);
    for (let img of pageNode) {
        //console.log(element)
     
        if (img.src !== '' || img.src.startsWith('data:image')) {
            imgSrcs.push(img.src)
        }
    }

    globalImgs = new Set(imgSrcs)
    

}
findImg();
//console.log(globalImgs);


function addImg(){
    // let imageBody = document.querySelector('images');
    let multiple = 1;
    for (let value of globalImgs){
        
        setTimeout(()=>{
            downloadImage(value);
            console.log(value);
        }, 1000 * multiple);
        multiple++; 
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message) {
      addImg();
      console.log(globalImgs);
      sendResponse(globalImgs);
    }})
//addImg();

//
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    
    const link = document.createElement('a')
    link.href = imageURL
    link.download = document.getElementsByClassName('og3lId')[0].value
    console.log('Image download')
    console.log(link);
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
