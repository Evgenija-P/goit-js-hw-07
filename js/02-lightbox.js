import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(`.gallery`);

//------- Создаем разметку -------
const galleryImages = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" 
  src="${item.preview}" 
  alt="${item.description}" />
</a>`
  )
  .join("");

divGallery.insertAdjacentHTML("afterbegin", galleryImages);

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
