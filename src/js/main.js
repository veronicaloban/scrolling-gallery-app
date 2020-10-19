//we create HTML Card elements based on the data loaded
let createCardElement = (id, albumId, title, url, thumbnailUrl, parentElement) => {
  let cardElement = document.createElement("div");
  cardElement.setAttribute("class", "card");
  cardElement.setAttribute("id", id);

  let imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "card__image-container");

  let image = document.createElement("img");
  image.setAttribute("src", thumbnailUrl);

  let albumIdName = document.createElement("p");
  albumIdName.setAttribute("class", "card__albumId");
  albumIdName.innerHTML = `${albumId}`;

  let titleName = document.createElement("p");
  titleName.setAttribute("class", "card__titleName");
  titleName.innerHTML = `${title}`;

  cardElement.appendChild(imageContainer);
  imageContainer.appendChild(image);
  cardElement.appendChild(albumIdName);
  cardElement.appendChild(titleName);
  parentElement.appendChild(cardElement);
}

//to know whether we've reached the bottom of the loaded content
let addMoreContent = () => {
  while(true) {
    let windowBottom = document.documentElement.getBoundingClientRect().bottom;

    if(windowBottom > document.documentElement.clientHeight + 50) break;
    //'its time to load more data'
  }
}

window.addEventListener('scroll', addMoreContent);

let url = 'https://jsonplaceholder.typicode.com/photos';

//load data
async function getDataFrom(url) {
  let response = await fetch(url);
  let result = await response.json();

  return result;
}
