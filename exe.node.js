console.log("Ex 01") 
var num = 12;
var string = "Nome"
var ta = 1
console.log(num,string,ta);

console.log("Ex 02") 

var prim = "Gustavo";
var seg = " Porto";

var nome = prim + seg;

console.log(nome);

console.log("Ex 03") 

var num3 = 10;
var nom3 = "Gustavo";
var result3 = "Meu nome é " + nom3 + " e tenho " + num3 + " Anos de vida";

console.log(result3);

console.log("Ex 04") 

var a = 10;
console.log(a);
var a = 20;
console.log(a);

console.log("Ex 05") 

var a = 10;
console.log(a);

var b = 1;

if (b >= 1) {
    var a = 25;
    console.log(a);
}

console.log("Ex 06") 
var chuva = 1;

if (chuva > 0) {
    var chovendo = "Está chovendo, leve um guarda chuva";
    console.log(chovendo);
}
else {
    var sol = "Não está chovendo, não precisa de guarda chuva";
    console.log(sol);
}

console.log("Ex 07") 

var n1 = 8;
var n2 = 9;
var n3 = 5.5;
var media = (n1+n2+n3)/3
console.log(media)

console.log("Ex 08") 

var base = 10;
var alt = 15;
var area = (base*alt)/2
console.log(area)

console.log("Ex 09") 

var raio = 10;
const pi = 3.14;
var area9 = (raio*raio)*pi

console.log(area9)

console.log("Ex 10") 

var V = 135;
var I = 5;
var resist = V/I;

console.log(resist)


console.log("Ex 11") 

var sal = 1500;
var imp = 0.2;

var salfin = sal-(sal*imp)
console.log(salfin)

console.log("Ex 12") 

var litro = 10;
var valor = 5.50;
var valgast = litro*valor
console.log(valgast)

console.log("Ex 13") 

var HpDia = 8;
var DpMes = 25;
var CdaEer = 0.75;
var conPH = 1750; 
var TotalH = HpDia*DpMes
var conTotal = (conPH*TotalH)/1000
var ValorTotal = conTotal*CdaEer
console.log("O Valor total é: " + ValorTotal + " Reais")

console.log("Ex 14") 

var n1 = 9;
var n2 = 8;
var n3 = 7;
var media = (n1+n2+n3)/3;

if (media >= 6) {
    console.log(media);
    console.log("Aprovado");

}
else { 
    console.log(media);
    console.log("Reprovado");

}

console.log("Ex 15") 

var peso = 130;
var altura = 1.8;
var IMC = peso/(altura*altura)
console.log(IMC)
if (IMC < 18.5) {
    console.log("Magreza");
}
else if (IMC > 18.5 && IMC <24.9) {
    console.log("Normal");
}
else if (IMC > 25 && IMC <29.9) {
    console.log("Sobrepeso");
}
else if (IMC > 30 && IMC <39.9) {
    console.log("Obesidade");
}
else if (IMC > 40) {
    console.log("Obesidade Grave");
}