
function appendToDisplay(value) {
    document.getElementById('display1').value += value;
 
}
console.log(appendToDisplay)

function clearDisplay() {
    document.getElementById('display1' , 'display2').value = ' ';
}

function placaStP(value) {
    var placaStP = 2.16
    var result = eval(document.getElementById('display1').value);
    
    document.getElementById('display2').value = result / placaStP  ;
}

function placaStG(value) {
    var placaStG = 2.88 
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display2').value = result * placaStG  ;
}

function montante(value) {
    var montante = 1.5
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display2').value = result * montante;
}

function guia(value) {
    var guia = 2.4
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display2').value = result / guia ;
}

function cantoneira(value) {
    var guia = 1.5
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display2').value = result / guia ;
}

function f530(value) {
    var guia = 1.5
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display2').value = result / guia ;
}

function parafusoGn25(value) {
    var parafusoGn = 15
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display2').value = result * parafusoGn ;
}

function ParafusoChap(value) {
    var parafusoFlang = 15
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display2').value = result * parafusoFlang ;
}

function regulador(value) {
    var guia = 1.5
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display2').value = result * guia ;
}

function showListTeto() {
    
    var placaStG =2
    var cantoneira = 2.5
    var f530 = 1.8
    var tiranteERegulador = 1.3  
    var parafusoGn = 5 
    var parafusoFlang=0.15
    var massa = 0.5 
    var fita = 2
    var result = eval(document.getElementById('display1').value);
    
    document.getElementById('BudgetTeto').style.display = 'block';
    document.getElementById('displayPlaca').value = result / placaStG;
    document.getElementById('displayCantoneira').value = result / cantoneira;
    document.getElementById('displayF530').value = result / f530;
    document.getElementById('displayTranteERegulor').value = result * tiranteERegulador;
    document.getElementById('displayParafusoGn').value = result / parafusoGn +" Ct";
    document.getElementById('displayParafusoFlang').value = result * parafusoFlang +" Ct";
    document.getElementById('displayMassa').value = result * massa+" Kg";
    document.getElementById('displayFita').value = result * fita + " Mt";
}

function showListParede() {
    
    var placaStG =2
    var guia = 0.75
    var montante = 1
    var cantoneiraPerfurada = 2  
    var parafusoGn = 15  
    var parafusoFlang= 5 
    var massa = 0.5 
    var fita = 2
    var result = eval(document.getElementById('display1').value);
    
    document.getElementById('BudgetParede').style.display = 'block';
    document.getElementById('displayPlaca').value = result / placaStG;
    document.getElementById('displayGuia').value = result * guia;
    document.getElementById('displayMontante').value = result * montante;
    document.getElementById('displayCantoneira').value = result * cantoneiraPerfurada;
    document.getElementById('displayParafusoGn').value = result * parafusoGn;
    document.getElementById('displayParafusoFlang').value = result * parafusoFlang;
    document.getElementById('displayMassa').value = result * massa;
    document.getElementById('displayFita').value = result * fita;
}

function closeListTeto() {

    document.getElementById('BudgetTeto').style.display = 'none';
    console.log('aqui')
}

function closeListParede() {

    document.getElementById('BudgetParede').style.display = 'none';
    console.log('aqui')
}

function calculate() {
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display1').value = result;
}






function calculateAndSendMessage() {
    var displayValue = eval(document.getElementById('display1').value);

   
    var placaStPResult = Math.ceil(displayValue / 2.16);
    var cantoneira25Result = Math.ceil(displayValue / 2.5);
    var f530Result = Math.ceil(displayValue / 1.8);
    var reguladorETiranteResult = Math.ceil(displayValue * 1.3);
    var parafusoGn25Result = Math.ceil(displayValue * 0.5);
    var parafusoFlang13Result = Math.ceil(displayValue * .15);
    var massaProntaResult = Math.ceil(displayValue * 0.5);
    var fitaParaJuntaResult = Math.ceil(displayValue * 2);

  
    
    var message = `
    Olá, preciso deste Orçamento:\n
    Placa ST P: ${placaStPResult}\n
    Cantoneira: ${cantoneira25Result}\n
    F530: ${f530Result}\n
    Regulador e tirante: ${reguladorETiranteResult}\n
    ParafusoGn25: ${parafusoGn25Result} centos\n
    Parafuso metal: ${parafusoFlang13Result} centos\n
    Massa: ${massaProntaResult} kg\n
    Fita: ${fitaParaJuntaResult} metros\n`;

   
    sendMessage(message);
  
}


function sendMessage(message) {
    var phone = 5521994598743;; 
    var url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

document.getElementById("calculateAndSendMessageButton").addEventListener("click", calculateAndSendMessage);


