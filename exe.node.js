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


// Aula 04


console.log("Ex 1") 

var Frase = "A morte é como o vento, está sempre ao meu lado";
console.log(Frase ,Frase.length);
console.log(Frase.toUpperCase());

console.log("Ex 2") 

var A = null;
var B = undefined;

console.log(A,B)

console.log("Ex 3") 

String(2);
String(undefined);
String(true);

console.log(String(2),String(undefined),String(true));

console.log("Ex 4")


let Valor = 1611;
let letras = "Rico";
let ConvValxLetr = Valor.toString();
let ConvLetrxVal = Number(letras);
console.log(ConvValxLetr);
console.log(ConvLetrxVal);
console.log(typeof ConvValxLetr); // Deve exibir "string"
console.log(typeof ConvLetrxVal);

console.log("Ex 5")

var poema = "Can you believe this?"

console.log(poema.toUpperCase(), poema.toLowerCase());


console.log("Ex 6")


let saldo = 1000;        
let deposito = 200;    
let saque = 150;       


let operacao = 'deposito'; 


if (operacao === 'deposito') {
    saldo += deposito; 
} else if (operacao === 'saque') {
    saldo -= saque;   
} else {
    console.log('Operação inválida'); 
}


console.log(saldo);

console.log("Ex 7")


var num = 8;

var resp = num % 2 === 0 ? 'Par' : 'Ímpar';
console.log(resp);

console.log("Ex 8")


var UserON = true;
var Admin = false;

if (UserON == true && Admin == true) {
    console.log("Usário está Logado e tem permissão de Admin")
}
else if (UserON == false && Admin == true) {
     console.log("Usuario não está logado, mas tem permissão de Admin")
}
else if (UserON == true && Admin == false) {
     console.log("Usuario está logado, mas não tem permissão de Admin")
}
else {
     console.log("Usuario não está logado e nem tem permissão de Admin")
}


console.log("Ex 9")

var pizza = false;
var lanche = false;
var arroz = false;

console.log("Comeu besteira na janta?");

if (pizza === true || lanche === true) {
    console.log("Comeu besteira")
}
else {
    console.log("Não Comeu besteira")
}

console.log("Ex 10")

idademin = 18;
idadeusu = 26;

if (idadeusu > idademin) {
    console.log("Pode comprar o ingresso")
}
else {
    console.log("Proibido a venda do ingresso")
}

console.log("Ex 11")

function frases(nome) {
    return "O nome dela é " + nome + "! e eu encontrei ela no Tinder";
}


let nomePessoa = "Jenifer";
let mensagem = frases(nomePessoa);

console.log(mensagem);

console.log("Ex 12")

function MaiordeIdade(idade2) {
    if (idade2 >= 18){
        return "Maior de idade";
    }
    else {
        return "Menor de idade";
    }
}
var idade = 19;
let mensagem2 = MaiordeIdade(idade);

console.log(mensagem2);

console.log("Ex 13")

function Palindromo(str) {
  
    let arrayDeCaracteres = str.split('');
    let arrayInvertido = arrayDeCaracteres.reverse();
    let strInvertida = arrayInvertido.join('');
    return str === strInvertida;
}


let texto = "natan";
let resultado = Palindromo(texto);

console.log("O texto \"" + texto + "\" é palíndromo? " + resultado);


console.log("Ex 14")

function encontrarMaior(a, b, c) {
 
    let maior;

    
    if (a >= b && a >= c) {
        maior = a;
    } else if (b >= a && b >= c) {
        maior = b;
    } else {
        maior = c;
    }

    
    return maior;
}


let numero1 = 15; 
let numero2 = 22;
let numero3 = 10;

let maiorNumero = encontrarMaior(numero1, numero2, numero3);


console.log("O maior número é:", maiorNumero);

console.log("Ex 15")

function calculaPotencia(Base, expoente) {
    
    let Resultado = Base ** expoente;
    
   
    return Resultado;
}

let Base = 2;       
let expoente = 3;

let Resultado = calculaPotencia(Base, expoente);


console.log(Base + " elevado à potência" + expoente + " é igual a " + Resultado);