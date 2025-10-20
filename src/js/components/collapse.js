document.querySelectorAll(".collapsible").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    button.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.border = "";
      button.style.backgroundColor = "";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.border = "#444 solid 1px";
      button.style.backgroundColor = "#ccc";
    }
  });
});
