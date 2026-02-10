/* listItems Strikethrough */
const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

/* Image Toggler */
const Img1 = document.getElementById("Img1");
function ToggleImage()  {
  if (Img1.getAttribute("src") == "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png")  {
    Img1.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4K463tqn7xoNRluPEEob5C2EttjVv2REPiBAspV6eoS5qNyY4_npx&usqp=CAE&s");
  } else {
    Img1.setAttribute("src", "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png");
  }
}
