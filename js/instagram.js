const instagramGrid = document.querySelector("#instagram-grid");
const instagramBackdrop = document.querySelector("#instagram-backdrop");
const instagramModalImagem = document.querySelector("#instagram-modal-imagem");
const instagramModalTitulo = document.querySelector("#instagram-modal-titulo");
const instagramModalTexto = document.querySelector("#instagram-modal-texto");

const instagramModalFechar = document.querySelector("#instagram-modal-fechar");

instagramModalFechar.onclick = () => {
  instagramBackdrop.className = "instagram-backdrop";
};                                                  

async function loadInstagramImages() {
  const response = await fetch('./json/instagram.json');
  const instagramImages = await response.json();
  
  instagramImages.forEach(cat => {
    let instagramImages = document.createElement('img');
    instagramImages.src = cat.thumbnail;
    instagramImages.className = 'instagram-image';
  
    instagramImages.onclick = () => {
      instagramBackdrop.className = 'instagram-backdrop open';
      instagramModalImagem.src = cat.thumbnail;
      instagramModalTitulo.innerHTML = cat.titulo;
      instagramModalTexto.innerHTML = cat.texto;
  
      instagramModalDeleteButton.onclick = () => {
        instagramBackdrop.className = 'instagram-backdrop';
        instagramGrid.removeChild(instagramImages);
      };
    };
  
    instagramGrid.appendChild(instagramImages);
  });
}

loadInstagramImages();
