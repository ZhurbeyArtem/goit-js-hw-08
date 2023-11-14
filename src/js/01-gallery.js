import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const list = document.querySelector('.gallery');

const res = galleryItems.map(el =>
  `
  <li class="gallery__item">
   <a class="gallery__link" href="${el.original}">
      <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
   </a>
</li>
  `
)

list.insertAdjacentHTML('beforeend', res.join(''))

new SimpleLightbox('.gallery a', { 
    caption: true,
    captionDelay: 250,
    captionsData: 'alt',
   });
