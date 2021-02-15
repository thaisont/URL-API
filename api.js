// API shortner

const result = document.querySelector(".main-section-result");
const shortLink = document.getElementById("short");
const link = document.getElementById("link");
const copyBtn = document.querySelector(".link-copy");

const apiUrl =
  "https://api.shrtco.de/v2/shorten?url=https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G";

async function getUrl() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);

  const shortUrl = data.result.short_link;
  const fullUrl = data.result.original_link;

  console.log(shortUrl);
  console.log(fullUrl);

  link.value = fullUrl;
  shortLink.value = shortUrl;
}
getUrl();

copyBtn.addEventListener("click", (e) => {
  /* Get the text field */
  const copyText = document.getElementById("short");

  /* Select the text field */
  copyText.select("short");
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  console.log("text copied");
});
