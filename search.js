const searchBtn = document.querySelector(".api-search-btn");
const inputSearch = document.querySelector(".search-term");

const higlightedText = document.querySelector(".highlighted-text");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputSearch.value === "") {
    console.log("BLANK");
    inputSearch.classList.add("focus");

    higlightedText.classList.add("show");
  } else {
    inputSearch.classList.remove("focus");
    higlightedText.classList.remove("show");
  }
});
