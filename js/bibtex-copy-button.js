document.addEventListener("DOMContentLoaded", function () {
  let preTags = document.querySelectorAll("div.language-bibtex pre");

  if (!navigator.clipboard) return;

  preTags.forEach((preTag) => {
    let button = document.createElement("button");

    button.innerText = "Copy";
    preTag.appendChild(button);

    button.addEventListener("click", async () => {
      let codeTag = preTag.querySelector("code");
      let text = codeTag.innerText;
      await navigator.clipboard.writeText(text);
      button.innerText = "Copied!";
      setTimeout(() => {
        button.innerText = "Copy";
      }, 700);
    });
  });
});
