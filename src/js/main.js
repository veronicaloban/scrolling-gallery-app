import { createCardElement } from './modules/card.js';
import { enablePreloader } from './modules/preloader.js';
import { getDataFromServer } from './modules/getDataFromServerFunc.js';
import { enableModalWindow } from './modules/modalWindow.js';

let galleryElement = document.getElementById("gallery");

let numberOfLoads = 0;//number of times we loaded data

//do the first load of cards
getDataFromServer(`https://jsonplaceholder.typicode.com/photos?_page=${++numberOfLoads}&_limit=20`)
  .then(data => data.map( item => createCardElement(item.id, item.albumId, item.title, item.url, item.thumbnailUrl, galleryElement)))

//optional functionality of the app
enableModalWindow(galleryElement);
enablePreloader();

//load more content when needed
let addMoreContent = () => {
    let windowBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;

    windowBottom == document.documentElement.scrollHeight ?
    getDataFromServer(`https://jsonplaceholder.typicode.com/photos?_page=${++numberOfLoads}&_limit=20`)
      .then(data => data.map( item => createCardElement(item.id, item.albumId, item.title, item.url, item.thumbnailUrl, galleryElement))) : false;
  }

window.addEventListener('scroll', addMoreContent, false);
