const comments = [
 {
  createdAt: "5 horas atrás",
  message: "O programa CFA de Wall Street é uma perda de tempo colossal.",
   avatar: "./imagens/dj.png",
   username: "@art.boss",
 },
  {
  createdAt: "6 horas atrás",
  message: "Dados fatores internos e externos, não é baixa a probabilidade de o PIB retroceder no ano que vem.",
  avatar: "./imagens/homem.png",
  username: "@sparky9",
 },
  {
  createdAt: "8 horas atrás",
  message: "O crescimento do mercado de seguros, passado o pior momento que teoricamente foi ano passado, a receita das empresas já voltou a crescer.",
  avatar: "./imagens/mamae.png",
  username: "@trinitygood",
 },
  {
  createdAt: "Há 1 dia",
  message: "Mais modesto ainda é o crescimento do Banco Central do Brasil (BCB), segundo o qual em 2023 nossa produção de riquezas deverá aumentar somente 0,78%.",
  avatar: "./imagens/seguranca.png",
  username: "@ocaio.ok",
 },
]
  
let commentsList = document.querySelector("#comments-list");

comments.forEach(commentData => {
  const commentItem = getCommentItem(
    commentData.avatar,
    commentData.username,
    commentData.createdAt,
    commentData.message
  )

  commentsList.appendChild(commentItem);
});

function getCommentItem(avatar, username, createdAt, message){
  
  let commentsListItem = document.createElement("article");
  commentsListItem.className = "comments-list-item";

  let commentsListItemInfo = document.createElement("div");
  commentsListItemInfo.className = "comments-list-item-info";

  let commentsListItemInfoContent = document.createElement("div");
  commentsListItemInfoContent.className = "comments-list-item-info-content";

  let commentsListItemAvatar = document.createElement("img");
  commentsListItemAvatar.className = "comments-list-item-avatar";
  commentsListItemAvatar.src = avatar;

  let commentsListItemUsername = document.createElement("span");
  commentsListItemUsername.className = "comments-list-item-username";
  commentsListItemUsername.innerHTML = username;
  
  let commentsListItemCreatedAt = document.createElement("span");
  commentsListItemCreatedAt.className = "comments-list-item-created-at";
  commentsListItemCreatedAt.innerHTML = createdAt;
  
  
  
  let commentsListMessage = document.createElement("p");
  commentsListMessage.className = "comments-list-item-message";
  commentsListMessage.innerHTML = message;

commentsListItemInfo.appendChild(commentsListItemAvatar);
commentsListItemInfoContent.appendChild(commentsListItemUsername);
commentsListItemInfoContent.appendChild(commentsListItemCreatedAt);
commentsListItemInfo.appendChild(commentsListItemInfoContent);
  
commentsListItem.appendChild(commentsListItemInfo);
commentsListItem.appendChild(commentsListMessage);

return commentsListItem;
};