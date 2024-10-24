let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(700, 300);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("purple");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(740, 167, 1));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "planeta dos macacos";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "scooby doo";          
        } else{
         return "minions 4";
        }
      } else {
        if (gostaDeFantasia) {
          return "carros";
        } else {
          return "ta chovendo hamburguer 2";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "gigantes de aço";
    } else {
      return "coringa";
    }
  }
}
