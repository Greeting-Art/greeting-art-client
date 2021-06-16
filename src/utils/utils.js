/* eslint-disable max-len */
/* eslint-disable indent */
import { saveAs } from 'file-saver';

export default function downloadCanvas(){
  const canvas = document.getElementsByClassName('p5Canvas')[0];
      // console.log('download canvas', canvas);
    canvas.toBlob((blob) => {
      saveAs(blob, 'my-random-canvas.jpg');
      // console.log('BLOB', blob);
    });
}

export function sortGallery(array){
  array.sort((d2, d1) =>
  new Date(d2.LastModified).getTime() - new Date(d1.LastModified).getTime()
  );
  array.reverse();
  return array;
}



// export default function downloadCanvas(){
//     // get canvas data
//     const canvas = document.getElementsByClassName('p5Canvas');
//     console.log(canvas);
//     const dataURL = canvas[0].toDataURL('image/png');
//     console.log(dataURL);

//     // create temporary link
//     const saveCanvas = document.createElement('a');
//     saveCanvas.download = 'greeting.png';
//     saveCanvas.href = dataURL;

//   // temporarily add link to body and initiate download
//     document.body.appendChild(saveCanvas);
//     saveCanvas.click();
//     document.body.removeChild(saveCanvas);
//     console.log('Canvas saved!');
// }
