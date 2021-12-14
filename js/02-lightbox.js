import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryContainer: document.querySelector('.gallery'),
    galleryMarkup: createGalleryEl(galleryItems)
}

 
function createGalleryEl (galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
        return `
        
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        
        `
    })
    .join('')
}
refs.galleryContainer.insertAdjacentHTML('beforeEnd' , refs.galleryMarkup);

new SimpleLightbox('.gallery a' , {captionDelay: 250 , captionsData: 'alt'});