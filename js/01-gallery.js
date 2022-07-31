import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGallery = document.querySelector(`.gallery`);
let instance;

//------- Создаем разметку -------
const galleryImages = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class="gallery__image" 
src="${item.preview}" 
data-source="${item.original}" 
alt="${item.description}"/>
</a></div>`
  )
  .join("");

//------- Открытие карточки -------
const openImage = (event) => {
  event.preventDefault();

  // -----------Модалка запуск-----------
  instance = basicLightbox.create(
    `<div class="modal">
        <img src = "${event.target.dataset.source}" />
    </div>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", escClose);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", escClose);
      },
    }
  );
  instance.show();
};

function modalClose() {
  instance.close();
}

function escClose(event) {
  if (event.code === `Escape`) {
    modalClose();
  }
}
divGallery.addEventListener("click", openImage);
divGallery.insertAdjacentHTML("afterbegin", galleryImages);
