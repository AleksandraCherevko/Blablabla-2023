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
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log(evt.target);

  const modalPicture = basicLightbox.create(` <div class="modal">
    <img src="${evt.target.dataset.source}" width="800" height="600"> </div>
`);

  modalPicture.show();

  imagesContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      modalPicture.close();
    }
  });
}

const escapePress = basicLightbox.create(".modal", {
  onShow: () => {
    window.addEventListener("keydown", escapePress);
  },
  onClose: () => {
    window.removeEventListener("keydown", escapePress);
  },
});
