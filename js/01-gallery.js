import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(`.gallery`);
divGallery.addEventListener("click", openImage);

//------- Создаем разметку -------
const galleryImages = galleryItems.map((item) => 
`<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class="gallery__image" 
src="${item.preview}" 
data-source="${item.original}" 
alt="${item.description}"/>
</a></div>`).join("");

console.log(galleryImages);
divGallery.insertAdjacentHTML("afterbegin", galleryImages);

//------- Открытие карточки -------
function openImage (event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
      }
  const imgaeOrigin = event.target.dataset.source;

}

// function selectColor(event) {
//     if (event.target.nodeName !== "BUTTON") {
//       return;
//     }
  
//     const selectedColor = event.target.dataset.color;
//     output.textContent = `Selected color: ${selectedColor}`;
//     output.style.color = selectedColor;
//   }