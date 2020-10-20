//Preloader
let enablePreloader = () => {
  let preloaderElem = document.getElementById("preloader");

  document.body.onload = () => {
    setTimeout( () => {
    preloaderElem.classList.add("done");
      setTimeout( () => {
        preloaderElem.style.display = "none";
      }, 0)
    }, 2000)
  }

}

export { enablePreloader };
