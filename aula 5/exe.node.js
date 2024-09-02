//Ex.1
 

 
let marca = "Honda";
let modelo = "Civic"
var ano = "2019"
let motor_ligado = false
 
class Car {
 
    constructor() {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.motor_ligado = motor_ligado;
 
    }
 
     ligar_motor() {
        motor_ligado = true
    }
 
    desligar_motor() {
        motor_ligado = false
    }
 
    status_motor() {
        if (motor_ligado===true) {
            console.log(`O motor está Ligado`)
        }else{
            console.log(`O motor está Desligado`)
        }
    }
}
 
const carro = new Car();
carro.ligar_motor();
carro.desligar_motor();
carro.status_motor();
 
 
 
 
//Ex.2
 
let nome
var idade
let profissao
var salario
class Pessoa {
   constructor(nome,idade,profissao,salario) {
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
        this.salario = salario
    }
 
    exibirTrabalho(nomeEmpresa, tempoTrabalhoemAno){
        console.log(`${this.nome} tem ${this.idade} anos e trabalha como ${this.profissao}, ele trabalhou na empresa ${nomeEmpresa} e já faz ${tempoTrabalhoemAno} anos. Ele ganha um total de ${this.salario} por mês`);
    }
 
}
 
const pessoa = new Pessoa("Renato",35,"Trabalhador",2400)
pessoa.exibirTrabalho("GM Carros",1000)
 

//Ex.3
 
class Automovel {
    constructor(cor,modelo,tpcombusti,quanRodas,vidro,ligado) {
        this.cor = cor
        this.modelo = modelo
        this.tpcombusti = tpcombusti
        this.quanRodas = quanRodas
        this.vidro = false
        this.ligado = false
    }
 
    ligar(){
    this.ligado = true
    console.log("Está ligado")
    }
    desligar(){
    this.ligado = false
    console.log("Está Desligado")
    }
    abrirVidro(){
    this.vidro = true
    console.log("O vidro está aberto")
    }
    fecharVidro(){
    this.vidro = false
    console.log("O vidro está fechado")
    }
}
class Carro extends Automovel{
    constructor(cor,modelo,tpcombusti,quanRodas,vidro,ligado) {
        super(cor,modelo,tpcombusti,quanRodas,vidro,ligado)
    }
}
 
class Moto extends Automovel{
    constructor(cor,modelo,tpcombusti,quanRodas,vidro,ligado) {
        super(cor,modelo,tpcombusti,quanRodas,vidro,ligado)
    }
}
 
class Caminhao extends Automovel{
    constructor(cor,modelo,tpcombusti,quanRodas,vidro,ligado) {
        super(cor,modelo,tpcombusti,quanRodas,vidro,ligado)
    }
}
const carro = new Carro("Preto","Honda","Gás","4")
const moto = new Moto("Prata","BMW","Gasolina","2")
const caminhao = new Caminhao("Vermelho","Ford","Gasolina","6")
 
carro.ligar()
carro.desligar()
carro.abrirVidro()
carro.fecharVidro()
moto.ligar()
moto.desligar()
moto.abrirVidro()
moto.fecharVidro()
caminhao.ligar()
caminhao.desligar()
caminhao.abrirVidro()
caminhao.fecharVidro()

 
//Ex.4

 
class Cliente {
  constructor(nome, profissao, saldo) {
    this.nome = nome;
    this.profissao = profissao;
    this.saldo = saldo;
  }
 
  pix(valor) {
    if (valor <= 0) {
      console.log('Valor do PIX deve ser positivo.');
      return;
    }
    if (this.saldo < valor) {
      console.log('Saldo insuficiente para realizar o PIX.');
      return;
    }
    this.saldo -= valor;
    console.log(`PIX de R$${valor} realizado com sucesso.`);
  }
 
  emprestimo(valor) {
    if (valor <= 0) {
      console.log('Valor do empréstimo deve ser positivo.');
      return;
    }
    this.saldo += valor;
    console.log(`Empréstimo de R$${valor} recebido com sucesso.`);
  }
 
  saque(valor) {
    if (valor <= 0) {
      console.log('Valor do saque deve ser positivo.');
      return;
    }
    if (this.saldo < valor) {
      console.log('Saldo insuficiente para realizar o saque.');
      return;
    }
    this.saldo -= valor;
    console.log(`Saque de R$${valor} realizado com sucesso.`);
  }
 
  extrato() {
    console.log(`Extrato: Nome: ${this.nome}, Profissão: ${this.profissao}, Saldo: R$${this.saldo}`);
  }
}
 
const cliente = new Cliente("Gustavo","GustavoMendes",1200)
cliente.pix(200)
cliente.emprestimo(100)
cliente.extrato()

  //Ex.5

  class Maquina {
    constructor(nome_maquina,quanEixos,rotacaoM,consumo) {
        this.nome_maquina = nome_maquina
        this.quanEixos = quanEixos
        this.rotacaoM = rotacaoM
        this.consumo = consumo
        this.ligado = false
    }
    ligar(){
      ligado = true
        console.log(`Está ligada. ${this.ligado}`)
    }
    desliga(){
      this.ligado = false
      console.log(`Está Desligada. ${this.ligado}`)
    }
    ajustarVel(rotacao){
 
  if(rotacao>=100 && rotacao<=900){
    console.log("A rotação foi ajustada")
  this.rotacaoM = rotacao
  }else{
    console.log("Excedeu o limite minimo ou máximo. (Minimo: 100 & Máximo:900)")
    }
    }
    mostrar(){
      console.log(`${this.nome_maquina}, ${this.rotacaoM}, ${this.quanEixos}, ${this.consumo}, ${this.ligado}`)
    }
}
 
class Furadeira extends Maquina{
  constructor(nome_maquina,rotacaoM,consumo) {
    super(nome_maquina,null,rotacaoM,consumo)
  }
  mostrarF(){
    console.log(`${this.nome_maquina}, ${this.rotacaoM}, ${this.consumo}`)
  }
}
 
const furadeira = new Furadeira("Furadeira123",100,20)
furadeira.ajustarVel(200)
furadeira.mostrarF()

//Ex. 6

 
class Produto {
    constructor(nomeP, quantidade, precoProduto, tpComunicao, consumo,temperatura) {
    this.nomeP = nomeP;
    this.quantidade = quantidade;
    this.precoProduto = precoProduto;
    this.tpComunicao = tpComunicao;
    this.consumo = consumo;
    this.temperatura = temperatura
    this.liga = false
    }
   
  }
  class Fritadeira extends Produto{
    constructor(nomeP, quantidade, precoProduto, tpComunicao, consumo,temperatura){
      super(nomeP, quantidade, precoProduto, tpComunicao, consumo,temperatura)
    }
    ligar(){
      this.liga = true
      console.log("A Fritadeira foi ligada")
    }
    desligar(){
      this.liga = false
      console.log("A Fritadeira foi Desligada")
    }
    ajustarTemperatura(setPoint){
      this.temperatura = setPoint
      if(setPoint>=0&&setPoint<=1000){
        console.log(`A temperatura foi ajustada para ${this.temperatura}ºC.`)
      }else{
        console.log("A temperatura ultrapassou o setpoint")
      }
    }
  }
  class Televisao extends Produto{
    constructor(nomeP, quantidade, precoProduto, tpComunicao, consumo,temperatura){
      super(nomeP, quantidade, precoProduto, tpComunicao, consumo,temperatura)
    }
    ligar(){
      this.liga = true
      console.log("A Televisão foi ligada")
    }
    desligar(){
      this.liga = false
      console.log("A Telivisão foi Desligada")
    }
    ajustarTemperatura(setPoint){
      this.temperatura = setPoint
      if(setPoint>=0&&setPoint<=1000){
        console.log(`A temperatura foi ajustada para ${this.temperatura}ºC.`)
      }else{
        console.log("A temperatura ultrapassou o setpoint")
      }
    }
  }
  class ArCondicionado extends Produto{
    constructor(nomeP, quantidade, precoProduto, tpComunicao, consumo,temperatura){
      super(nomeP, quantidade, precoProduto, tpComunicao, consumo,temperatura)
    }
    ligar(){
      this.liga = true
      console.log("O Ar Condicionado foi ligada")
    }
    desligar(){
      this.liga = false
      console.log("O Ar Condicionado foi Desligada")
    }
    ajustarTemperatura(setPoint){
      this.temperatura = setPoint
      if(setPoint>=0&&setPoint<=1000){
        console.log(`A temperatura foi ajustada para ${this.temperatura}ºC.`)
      }else{
        console.log("A temperatura ultrapassou o setpoint")
      }
    }
  }
   


  //Ex.7
  class Livros {
    constructor(nome_livro, quantidade, preco_livro,nome_autor, edicao) {
      this.nome_livro = nome_livro;
      this.quantidade = quantidade;
      this.preco_livro = preco_livro;
      this.nome_autor = nome_autor;
      this.edicao = edicao;
    }
    mostra(){
        console.log(`${this.nome_livro}, ${this.quantidade}, ${this.preco_livro}, ${this.nome_autor}, ${this.edicao}`)
    }
 
    emprestar(empresta){
        this.quantidade -= empresta
console.log(`Foi emprestado com sucesso. Total disponivel: ${this.quantidade}`)
    }
devolver(devolve){
    this.quantidade += devolve
    console.log(`O livro foi devolvido. Total disponivel: ${this.quantidade}`)
 
}
}
const livro = new Livros("Felipe",3,13.40,"Otávio","Especial de natal")
livro.mostra()
livro.emprestar(1)
livro.devolver(1)
 
 