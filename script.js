
function appendToDisplay(value) {
    document.getElementById('display1').value += value;
 
}

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
    var guia = 1.5
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display2').value = result / guia ;
}

function ParafusoChap(value) {
    var guia = 1.5
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display2').value = result / guia ;
}

function regulador(value) {
    var guia = 1.5
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display2').value = result / guia ;
}

function showList() {
    
    var placaStG =2
    var guia = 0.75
    var montante = 1
    var cantoneiraPerfurada = 2  
    var parafusoGn = 15  
    var parafusoFlang= 5 
    var massa = 0.5 
    var fita = 2
    var result = eval(document.getElementById('display1').value);
    
    document.getElementById('Budget').style.display = 'block';
    document.getElementById('displayPlaca').value = result / placaStG;
    document.getElementById('displayGuia').value = result * guia;
    document.getElementById('displayMontante').value = result * montante;
    document.getElementById('displayCantoneira').value = result * cantoneiraPerfurada;
    document.getElementById('displayParafusoGn').value = result * parafusoGn;
    document.getElementById('displayParafusoFlang').value = result * parafusoFlang;
    document.getElementById('displayMassa').value = result * massa;
    document.getElementById('displayFita').value = result * fita;
    
    
    
}

function closeList() {

    document.getElementById('Budget').style.display = 'none';
    console.log('aqui')
}

function calculate() {
    var result = eval(document.getElementById('display1').value);
    document.getElementById('display1').value = result;
}



