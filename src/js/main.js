let galleryElement = document.getElementById("gallery");

let numberOfLoads = 1;

//load data
async function getDataFrom() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${numberOfLoads++}&_limit=20`);
  let result = await response.json();

  return result;
}

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

getDataFrom().then(data => data.map(item => createCardElement(item.id, item.albumId, item.title, item.url, item.thumbnailUrl, galleryElement)))

let addMoreContent = () => {
    let windowBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;
    windowBottom + 50 >= document.documentElement.scrollHeight ?
    getDataFrom().then(data => data.map(item => createCardElement(item.id, item.albumId, item.title, item.url, item.thumbnailUrl, galleryElement))) : false;
  }


window.addEventListener('scroll', addMoreContent);
