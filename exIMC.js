let Nome = "Jose";
let Sobrenome = "da Silva";
let Idade = "27";
let Peso = "83.5";
let Altura = "1.70";
let Plano  = "Ouro";
let IMC = Peso/(Altura*Altura);

console.log("Olá "+ Nome + " " + Sobrenome);
console.log("Segue as informações abaixo:");
console.log("Você tem " + Idade + " Anos " + "e pesa " + Peso + "Kg");
console.log("Sua altura é de " + Altura + "Mts");
console.log("Tipo de plano: " + Plano);
console.log("Seu índice de massa corporal é de: " + IMC.toFixed(2));