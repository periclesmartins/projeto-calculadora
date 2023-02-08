// Função para inserir números na tela da calculadora
function insert(num) {
    // Pega o valor atual da tela da calculadora
    let numero = document.getElementById("resultado").innerHTML;
  
    // Adiciona o novo número na tela da calculadora
    document.getElementById("resultado").innerHTML = numero + num;
}
  
// Função para limpar a tela da calculadora
function clean() {
    // Define o valor da tela da calculadora como vazio
    document.getElementById("resultado").innerHTML = "";
  }
  
// Função para remover o último caractere da tela da calculadora
function back() {
    // Pega o valor atual da tela da calculadora
    let resultado = document.getElementById("resultado").innerHTML;
  
    // Remove o último caractere da tela da calculadora
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}
  
// Função para calcular o resultado da expressão na tela da calculadora
function calcular() {
    // Pega o valor atual da tela da calculadora
    let resultado = document.getElementById("resultado").innerHTML;
  
    // Verifica se a tela da calculadora não está vazia
    if (resultado.length > 0) {
    // Usa a função eval() para calcular o resultado da expressão e exibe na tela da calculadora
    document.getElementById("resultado").innerHTML = eval(resultado);
    }
}
  