let preloaderElem = document.getElementById("preloader");
let preloaderAnimation = document.getElementById("preloader-animation");



document.body.onload = () => {
  setTimeout( () => {
    preloaderElem.classList.add("done");
    setTimeout( () => {
      preloaderElem.style.display = "none";
    }, 0)
  }, 2000)
}



let numberOfLoads = 0;
let galleryElement = document.getElementById("gallery");

//load data
let getDataFromServer = async () => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${numberOfLoads++}&_limit=20`);
  let result = await response.json();

  return result;
}

//we create HTML Card elements based on the data loaded
let createCardElement = (id, albumId, title, url, thumbnailUrl, parentElement) => {
  let cardElement = document.createElement("div");
  cardElement.classList.add('card');
  cardElement.innerHTML =
  `
    <div class="card__image-container">
      <img src="${thumbnailUrl}" alt="">
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

let modalWindowContainer = document.getElementById("modal-window-container");
let modalWindowImageContainer = document.getElementById("modal-window-container__image-container");
let modalWindowImage = document.getElementById("modal-window-container__image")

let openInModalWindow = (event) => {
  let url = event.target.getAttribute('src');
  modalWindowImage.setAttribute('src', url);
  modalWindowContainer.classList.remove("closed");
  modalWindowContainer.classList.add("open");
}


galleryElement.addEventListener("click", openInModalWindow)

let closeButton = document.getElementById("modal-window-container__close-button");

let closeModalWindow = () => {
  modalWindowContainer.classList.remove("open");
  modalWindowContainer.classList.add("closed");
}

closeButton.addEventListener("click", closeModalWindow)
//let closeButton =




//load more content when needed
let addMoreContent = () => {
    let windowBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;
    windowBottom == document.documentElement.scrollHeight ?
    getDataFromServer().then(data => data.map(item => createCardElement(item.id, item.albumId, item.title, item.url, item.thumbnailUrl, galleryElement))) : false;
  }




window.addEventListener('scroll', addMoreContent, false);

getDataFromServer().then(data => data.map(item => createCardElement(item.id, item.albumId, item.title, item.url, item.thumbnailUrl, galleryElement)))
