/* eslint-disable indent */

export default function downloadCanvas(){
    // get canvas data
    const canvas = document.getElementsByClassName('p5Canvas');
    console.log(canvas);
    const dataURL = canvas[0].toDataURL('image/png');
    console.log(dataURL);

    // create temporary link
    const saveCanvas = document.createElement('a');
    saveCanvas.download = 'greeting.png';
    saveCanvas.href = dataURL;

  // temporarily add link to body and initiate download
    document.body.appendChild(saveCanvas);
    saveCanvas.click();
    document.body.removeChild(saveCanvas);
    console.log('Canvas saved!');
}
