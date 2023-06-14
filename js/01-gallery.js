import { galleryItems } from "./gallery-items.js";
// // Change code below this line

console.log(galleryItems);

const imagesContainer = document.querySelector(".gallery");

const cardsMarkup = createGalleryCardsMarkup(galleryItems);

imagesContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

imagesContainer.addEventListener("click", showBigImage);

function showBigImage(evt) {
  evt.preventDefault();

  if (evt.target.nodeName != "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => document.addEventListener("keydown", onEscPress),
      ocClose: () => document.removeEventListener("keydown", onEscPress),
    }
  );

  instance.show();

  function onEscPress(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
