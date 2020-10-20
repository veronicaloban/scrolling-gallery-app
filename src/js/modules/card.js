//to create a card element
let createCardElement = (id, albumId, title, url, thumbnailUrl, parentElement) => {
  let cardElement = document.createElement("div");
  cardElement.classList.add('card');
  cardElement.innerHTML =
  `
    <div class="card__image-container">
      <img src="${thumbnailUrl}" alt="" data-fullsizeimg="${url}">
    </div>
    <p class="card__albumId">
      ${albumId}
    </p>
    <p class="card__titleName">
      ${title}
    </p>
  `;

  parentElement.appendChild(cardElement);
}


export { createCardElement };
