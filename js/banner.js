const bannerImgs = [

"./imagens/map.jpg",

"./imagens/grafic.jpg",

"./imagens/money.jpg",

"./imagens/code.jpg",

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
