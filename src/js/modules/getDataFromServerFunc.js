//to load data
let getDataFromServer = async (url) => {
  let response = await fetch(url);
  let result = await response.json();

  return result;
}

export { getDataFromServer };
