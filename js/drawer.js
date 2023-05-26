//drawer inicio

let botaozinhoAppBar = document.getElementById("button-app-bar");

let drawer = document.querySelector("#drawer");

botaozinhoAppBar.addEventListener("click", () => {
  if (drawer.style.right === "0px") {
    drawer.style.right = "-256px";
  } else {
    drawer.style.right = "0px";
  }
});

//drawer fim