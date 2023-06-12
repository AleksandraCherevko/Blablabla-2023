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

function imageClick(evt) {
  blockStandartAction(evt);
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log(evt.target);

  const instance = basicLightbox.create(` <div class="modal">
    <img src="${evt.target.dataset.source}" width="800" height="600"> </div>
`);

  instance.show();

  imagesContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

function blockStandartAction(evt) {
  evt.preventDefault();
}

// const modalElement = document.querySelector(".modal");
// modalElement.addEventListener("click", () => {
//   instance.close();
// });

// REPETA
// function onImagesContainerClick(evt) {
//   blockStandartAction(evt);
//   const isImageSwatchEl = evt.target.classList.contains("gallery__item");

//   if (!isImageSwatchEl) {
//     return;
//   }

//   console.log(evt.target);

// basiclightbox , https://basiclightbox.electerious.com/

// const instance = basicLightbox.create(`
//     <img src="${evt.dataset.sourse}" width="800" height="600">
// `);

// instance.show();

//   function onImagesContainerClick(evt) {
//     blockStandartAction(evt);
//     if (evt.target.nodeName !== "IMG") {
//       return;
//     }
