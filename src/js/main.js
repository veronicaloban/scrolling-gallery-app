let numberOfLoads = 1;
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

//load more content when needed
let addMoreContent = () => {
    let windowBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;
    windowBottom + 50 >= document.documentElement.scrollHeight ?
    getDataFromServer().then(data => data.map(item => createCardElement(item.id, item.albumId, item.title, item.url, item.thumbnailUrl, galleryElement))) : false;
  }

window.addEventListener('scroll', addMoreContent);

getDataFromServer().then(data => data.map(item => createCardElement(item.id, item.albumId, item.title, item.url, item.thumbnailUrl, galleryElement)))
