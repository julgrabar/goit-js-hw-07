import { galleryItems } from './gallery-items.js';
// Change code below this line
const instance = basicLightbox.create(`
        <img src="" width="800" height="600">
    `);

const refs = {
    galleryContainer: document.querySelector('.gallery'),
    galleryMarkup: createGalleryEl(galleryItems),
    image : instance.element().querySelector('img'),

}

 
function createGalleryEl (galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `
    })
    .join('');
    
}

refs.galleryContainer.insertAdjacentHTML('beforeEnd' , refs.galleryMarkup);
refs.galleryContainer.addEventListener('click', onElementClick)

function onElementClick(evt){
    evt.preventDefault();
    if(!evt.target.closest('.gallery__item')){
        return;
    };
    refs.image.src = evt.target.dataset.source;
    instance.show();
    window.addEventListener('keydown', closeEsc);
}
function closeEsc(evt){
    if(evt.code==="Escape"){
    window.removeEventListener('keydown', closeEsc);
    instance.close();}
}