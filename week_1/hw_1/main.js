let mediaQueryObj = window.matchMedia("(prefers-color-scheme: dark)");
let isDarkMode = mediaQueryObj.matches;
let dark = true;

if (!isDarkMode) {
  document.body.style.backgroundColor = "#06c6c6";
  dark = false;
}

document.querySelector("#btn").addEventListener("mousedown", () => {
  if (dark) {
    document.body.style.backgroundColor = "#06c6c6";
    dark = false;
  } else {
    document.body.style.backgroundColor = "#071616";
    dark = true;
  }
});
