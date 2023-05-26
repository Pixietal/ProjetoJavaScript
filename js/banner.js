const bannerImgs = [

img="./imagens/map.jpg",

img="./imagens/grafic.jpg",

img="./imagens/money.jpg",

img="./imagens/code.jpg",

];

const banner = document.querySelector("#banner");

let bannerImgsIndex = 0;
const changeImageInterval = 3000;

setInterval (() => {
  const img = bannerImgs[bannerImgsIndex];
  banner.style.backgroundImage = `url(${img})`;

  if(bannerImgsIndex === bannerImgs.length -1){
    bannerImgsIndex = 0;
  } else {
    bannerImgsIndex++;
  }
}, changeImageInterval);