import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imagesContainer = document.querySelector(".gallery");

const cardsMarkup = createGalleryCardsMarkup(galleryItems);

imagesContainer.insertAdjacentHTML("beforeend", cardsMarkup);

imagesContainer.addEventListener("click", imageClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
   </li>`;
    })
    .join("");
}


function imageClick(evt) {
  evt.preventDefault();
  const options = {
    captionsData: "alt",
    captionDelay: 250,
  };
  const lightbox = new SimpleLightbox(".gallery a", options);
  window.removeEventListener("click", imageClick);
}
