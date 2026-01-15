var btn = document.querySelectorAll("button");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    alert("I got clicked");
  });
}
