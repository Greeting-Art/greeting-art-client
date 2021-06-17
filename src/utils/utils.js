/* eslint-disable max-len */
/* eslint-disable indent */
import { saveAs } from 'file-saver';

export default function downloadCanvas(){
  const canvas = document.getElementsByClassName('p5Canvas')[0];
    canvas.toBlob((blob) => {
      saveAs(blob, 'blob-ross-masterpiece.jpg');
    });
}

export function sortGallery(array){
  array.sort((d2, d1) =>
  new Date(d2.LastModified).getTime() - new Date(d1.LastModified).getTime()
  );
  array.reverse();
  return array;
}
