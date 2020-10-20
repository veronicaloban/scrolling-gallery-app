//enable to open and close the modal window
let enableModalWindow = (whereToEnable) => {
  //let galleryElement = document.getElementById("gallery");
  let modalWindowContainer = document.getElementById("modal-window-container");
  let modalWindowImage = document.getElementById("modal-window-container__image");
  let closeButton = document.getElementById("modal-window-container__close-button");


  let openInModalWindow = (event) => {
    let url = event.target.dataset.fullsizeimg;
    if (url === undefined) return;
    modalWindowImage.setAttribute('src', url);
    modalWindowContainer.classList.remove("closed");
    modalWindowContainer.classList.add("open");
  }

  let closeModalWindow = () => {
    modalWindowContainer.classList.remove("open");
    modalWindowContainer.classList.add("closed");
  }


  whereToEnable.addEventListener("click", openInModalWindow);
  closeButton.addEventListener("click", closeModalWindow);

}

export { enableModalWindow };
