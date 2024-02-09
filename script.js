const url_first = "https://api.thecatapi.com/v1/images/search?limit=10";
const url_second = "https://api.thedogapi.com/v1/images/search?limit=10";

// Buttons
const dogButton = document.querySelector("#dog");
const catButton = document.querySelector("#cat");

// Area to display images
const bodyGalery = document.querySelector(".body-galery");

// Function to fetch and display images
async function getAllPhotos(url) {
  bodyGalery.innerHTML = "";

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  data.forEach((imageData) => {
    const image = document.createElement("img");
    image.src = imageData.url;
    bodyGalery.appendChild(image);
  });
}

// Event listeners
catButton.addEventListener("click", () => {
  getAllPhotos(url_first);
});

dogButton.addEventListener("click", () => {
  getAllPhotos(url_second);
});
