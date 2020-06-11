
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar")
}

function redirecionar(){ 
    window.open("https://www.google.com/doodles/");
    //window.location.href = "https://www.google.com/doodles/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}


function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passar o mouse aqui";
    elemento.innerHTML = "Passar o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}
/*
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}


function voltar(){
    document.getElementById("mousemove").innerHTML = "Passar o mouse aqui";
}
*/
/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("qual a sua idade")
console.log(validaIdade(idade));
*/

/*
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));
*/

/*
var d = new Date(); 
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
*/

/*
var d = new Date(); 
alert(d.getMonth()+ 1); 
*/

/*
var d = new Date(); 
alert(d); 
*/

/*
var count; 
for(count=0; count <=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
}
*/

/*
var idade = prompt("qual a sua idade");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista[1]);
//alert(lista[1]);
//console.log(lista);
//console.log(lista.toString());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//console.log(lista.length);
//console.log(lista.reverse());
//var nome = "leone william";
//var idade = 29;
//var idade2 = 10;
//var frase = "JAPAO é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase());
//alert(frase.replace("JAPAO", "Brasil"));