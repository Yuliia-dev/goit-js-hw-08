// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', onClickJustImage);

const markup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markup);

function createGalleryMarkup(images) {
  return images
    .map(
      image =>
        `<a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>`,
    )
    .join('');
}

function onClickJustImage(event) {
  event.preventDefault();
  const isImage = event.target.classList.contains('gallery__image');
  if (!isImage) {
    return;
  }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
