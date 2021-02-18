// API shortner
document.addEventListener("DOMContentLoaded", function (event) {
  const result = document.querySelector(".main-section-result");
  const shortLink = document.getElementById("short");
  const link = document.getElementById("link");
  const copyBtn = document.querySelector(".link-copy");
  const apiSearchBtn = document.getElementById("api-search-btn");
  const searchInput = document.getElementById("search-placeholder");
  const mainSection = document.querySelector(".main-section-result");

  // This is the API URL
  const apiUrl = "https://api.shrtco.de/v2/shorten?url=";

  // Click event for "shorten it!" button
  apiSearchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // blank value input
    if (searchInput.value === "") {
      document.querySelector(".highlighted-text").style.display = "block";
    } else {
      document.querySelector(".highlighted-text").style.display = "none";
      // This gives you the value from the input
      console.log(searchInput.value, "searchInput.value");
      // Combine string of the API Url + Searchinput value
      let newUrl = `${apiUrl}${searchInput.value}`;

      // section appears

      // Pass it over to your function
      getUrl(newUrl);
    }
  });

  async function getUrl(urlString) {
    const response = await fetch(urlString);
    const data = await response.json();
    console.log(data);

    const shortUrl = data.result.short_link;
    const fullUrl = data.result.original_link;

    console.log(shortUrl);
    console.log(fullUrl);

    link.value = fullUrl;
    shortLink.value = shortUrl;
    mainSection.style.display = "block";
  }
  // getUrl();

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
});
