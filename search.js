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

// API shortner

const result = document.querySelector(".main-section-result");
const link = document.getElementById("link");
const shortnedLink = document.getElementById("link-shortened");

const apiUrl =
  "https://api.shrtco.de/v2/shorten?url=https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G";

async function getUrl() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  const fullUrl = data.result.original_link;
  console.log(fullUrl);
  link.innerHTML = fullUrl;

  //   bodyGenre.innerHTML = html;
  //   bodyDeveloper.innerHTML = `Developer : ${gameDeveloper}`;
}

getUrl();
