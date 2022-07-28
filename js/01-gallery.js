import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGallery = document.querySelector(`.gallery`);

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

divGallery.insertAdjacentHTML("afterbegin", galleryImages);

//------- Открытие карточки -------
const openImage = (event) => {
  event.preventDefault();

  // -----------Модалка запуск-----------
  const instance = basicLightbox.create(
    `<div class="modal">
        <img src = "${event.target.dataset.source}" />
    </div>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", (event) => {
          if (event.key === `Escape`) {
            instance.close();
          }
        });
      },
    }
  );
  instance.show();
};
divGallery.addEventListener("click", openImage);
