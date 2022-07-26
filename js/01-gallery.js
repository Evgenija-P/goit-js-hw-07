import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGallery = document.querySelector(`.gallery`);

divGallery.addEventListener("click", openImage);

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
function openImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imgaeOrigin = event.target.dataset.source;
  // console.log(imgaeOrigin);

  const instance = basicLightbox.create(modal(imgaeOrigin));
  const button = instance.element().querySelector("button");
  button.addEventListener("click", instance.close);
  instance.show();
  console.log(instance);
}

// -----------Модалка -----------
const modal = (image) =>
  `<div class="modal">
    <div class="modal-body">
      <p>${galleryItems.original}</p>
      <button>close</button>
    </div>
  </div>`;

// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = "https://placeimg.com/640/480/tech";

// const viewItem = (id) => {
//   const currentItem = items.find((item) => item.id === id);
//   const instance = basicLightbox.create(modalTemplate(currentItem.text));
//   const button = instance.element().querySelector("button");

//   button.addEventListener("click", instance.close);
//   instance.show();
// };
// const modalTemplate = (text = "") =>
//   `<div class="modal">
//     <div class="modal-body">
//       <p>${text}</p>
//       <button>close</button>
//     </div>
//   </div>`;
// function selectColor(event) {
//     if (event.target.nodeName !== "BUTTON") {
//       return;
//     }

//     const selectedColor = event.target.dataset.color;
//     output.textContent = `Selected color: ${selectedColor}`;
//     output.style.color = selectedColor;
//   }
