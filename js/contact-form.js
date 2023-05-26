const formContato = document.querySelector("#form-contato");

const formNome = document.querySelector("#form-nome");
const formEmail = document.querySelector("#form-email");
const formNumero = document.querySelector("#form-numero");
const formMensagem = document.querySelector("#form-mensagem");

formContato.onsubmit = event => {
  event.preventDefault();

  const nome = formNome.value;
  const email = formEmail.value;
  const numero = formNumero.value;
  const mensagem = formMensagem.value;

  const nomeValid = isNomeValid(nome);
  const emailValid = isEmailValid(email);
  const numeroValid = isNumeroValid(numero);
  const mensagemValid = isMensagemValid(mensagem);

  if(nomeValid && emailValid && mensagemValid) {
  alert("Formulário enviado!");
  } else {
    alert("Alguma coisa deu errado!");
  }
}; 
  
function isNomeValid(nome) {
  if(nome.length < 2) {
    return false;
  } else if (nome.length > 32) {
    return false;
  }

  return true;
};

function isEmailValid(email) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailMatch = email.match(emailRegex);
  
  if(emailMatch === null){
    return false;
  } else {
    return true;
  }
}  

function isNumeroValid(numero) {
  if(numero.length < 9) {
    return false;
  } else if (numero.length > 11) {
    return false;
  }
}

function isMensagemValid(mensagem) {
  if(mensagem.length < 5) {
    return false;
  } else if (mensagem.length > 300) {
    return false;
  }

  return true;
};
                             