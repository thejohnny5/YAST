let globalImgs;

function findImg (){
    console.log('Ran find image')
    let imgs = document.getElementsByTagName("img");
    const imgSrcs = [];

    for (let i = 0; i < imgs.length; i++){
        //if (imgs[i].src.endsWith('.png') || imgs[i].src.endsWith('.jpg') || imgs[i].src.endsWith('.jpeg')) {
            imgSrcs.push(imgs[i].src);
        //}
        
    }

    globalImgs = new Set(imgSrcs)
   

}
findImg();
console.log(globalImgs);


function addImg(){
    // let imageBody = document.querySelector('images');

    for (let value of globalImgs){
        downloadImage(value);
        console.log(value)
        
        //let img = new Image();
        //img.src = value;
        //document.getElementById('body').appendChild(img);
    }


}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message) {
      addImg();
    }})
//addImg();

async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'image file name here'
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