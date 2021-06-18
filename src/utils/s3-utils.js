/* eslint-disable quotes */
/* eslint-disable indent */
import request from 'superagent';

export async function sendToGallery(file) {
    const uploaded = await request
        .post(`https://limitless-everglades-53305.herokuapp.com/upload`)
        .attach('image', file);
        return uploaded.body;
}

export async function getGallery() {
    const gallery = await request.get(`https://limitless-everglades-53305.herokuapp.com/gallery`);
    return gallery.body.Contents;
}

