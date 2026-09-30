"use strict";
// 1. 
Object.defineProperty(exports, "__esModule", { value: true });
/*function imprimirNumeros(): void {
    for (let i = 1; i < 10; i++) {
        console.log(i);
    }
}*/
imprimirNumeros();
function imprimirNumeros() {
    for (let i = 1; i <= 10; i++) { // estava faltando o sinal de igual
        console.log(i);
    }
}
imprimirNumeros();
//2.=======================================================================================
/*function contarAte5(): void {
let contador = 0;
while (contador !== 5) {
console.log(contador);
contador = contador + 2;
}
}
contarAte5();*/
function contarAte5() {
    let contador = 0;
    while (contador !== 5) {
        console.log(contador);
        contador = contador + 1;
    }
}
contarAte5();
//3.=======================================================================================
/*function imprimirNomes(): void {
const nomes: string[] = ["Ana", "Bruno", "Carla"];
for (let i = 0; i <= nomes.length; i++) {  // sinal de menor ou igual imprimia 4 índices
console.log(nomes[i]);
}
}
imprimirNomes();*/
function imprimirNomes() {
    const nomes = ["Ana", "Bruno", "Carla"];
    for (let i = 0; i < nomes.length; i++) {
        console.log(nomes[i]);
    }
}
imprimirNomes();
//4.=======================================================================================
/*function somarPrecos(): number {
const precos: number[] = [10, 25, 30, 15];
let total = 0;
for (let preco in precos) { // o deveria ser o of no lugar no in
total =+ total;
}
return total;
}
console.log(somarPrecos());*/
function somarPrecos() {
    const precos = [10, 25, 30, 15];
    let total = 0;
    for (let preco of precos) {
        total += preco;
    }
    return total;
}
console.log(somarPrecos());
//5.=======================================================================================
/*function dispararAvisos(): void {
for (var i = 0; i < 3; i++) {
setTimeout(() => {
console.log("Aviso ");
}, 1000);
}
}
dispararAvisos();*/
function dispararAvisos() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("Aviso ");
        }, 1000);
    }
}
dispararAvisos();
//6.=======================================================================================
/*function imprimirTriangulo(): void {
const totalLinhas = 5;
for (let linha = 1; linha <= totalLinhas; linha++) {
let linhaTexto = "";
for (let coluna = 1; coluna < linha; coluna++) { //faltou o sinal de =
linhaTexto += "*";
}
console.log(linhaTexto);
}
}
imprimirTriangulo();*/
function imprimirTriangulo() {
    const totalLinhas = 5;
    for (let linha = 1; linha <= totalLinhas; linha++) {
        let linhaTexto = "";
        for (let coluna = 1; coluna <= linha; coluna++) {
            linhaTexto += "*";
        }
        console.log(linhaTexto);
    }
}
imprimirTriangulo();
//7.=======================================================================================
/*function encontrarPrimeiroPar(): void {
const numeros: number[] = [7, 9, 3, 11, 8, 15, 4];
for (let i = 0; i < numeros.length; i++) {
if (numeros[i] % 2 !== 0) {
continue;
}
console.log("Primeiro par encontrado: " + numeros[i]);
}
}
encontrarPrimeiroPar();*/
function encontrarPrimeiroPar() {
    const numeros = [7, 9, 3, 11, 8, 15, 4];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            continue;
        }
        console.log("Primeiro par encontrado: " + numeros[i]);
        break;
    }
}
encontrarPrimeiroPar();
//8.=======================================================================================
/*interface ItemCarrinho {
nome: string;
quantidadeEstoque: number;
}
function validarCarrinho(): void {
const carrinho: ItemCarrinho[] = [
{ nome: "Teclado", quantidadeEstoque: 3 },
{ nome: "Mouse", quantidadeEstoque: 0 },
{ nome: "Monitor", quantidadeEstoque: 5 }
];
carrinho.forEach((item) => {
if (item.quantidadeEstoque === 0) {
console.log("Carrinho invalido");
return;
}
});
console.log("Carrinho valido");
}
validarCarrinho();

interface ItemCarrinho {
    nome: string;
    quantidadeEstoque: number;
}
*/
function validarCarrinho() {
    const carrinho = [
        { nome: "Teclado", quantidadeEstoque: 3 },
        { nome: "Mouse", quantidadeEstoque: 0 },
        { nome: "Monitor", quantidadeEstoque: 5 }
    ];
    for (const item of carrinho) {
        if (item.quantidadeEstoque === 0) {
            console.log("Carrinho invalido");
            return;
        }
    }
    console.log("Carrinho valido");
}
validarCarrinho();
//9.=======================================================================================
/*function contagemRegressiva(): void {
    let numero = 3;

    do {
        console.log(numero);
        numero--;
    } while (numero >= 0); // número 1 no lugar do zero

    console.log("Fim!");
}

contagemRegressiva();

contagemRegressiva();*/
function contagemRegressiva() {
    let numero = 3;
    do {
        console.log(numero);
        numero--;
    } while (numero >= 1);
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva();
//10.=======================================================================================
/*function calcularProduto(): number {
const numeros: number[] = [2, 3, 4, 5];
let produto = 0;                            // todo numero multiplicado por zero e zero
for (let i = 0; i < numeros.length; i++) {
produto *= numeros[i];
}
return produto;
}
console.log(calcularProduto());*/
function calcularProduto() {
    const numeros = [2, 3, 4, 5];
    let produto = 1;
    for (let i = 0; i < numeros.length; i++) {
        produto *= numeros[i];
    }
    return produto;
}
console.log(calcularProduto());
//11.=======================================================================================
/*function imprimirTabuadaDe7(): void {
    const numero = 7;
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
        i++;
    }
}
imprimirTabuadaDe7();*/
function imprimirTabuadaDe7() {
    const numero = 7;
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}
imprimirTabuadaDe7();
//12.=======================================================================================
/*function removerPares(): number[] {
const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < numeros.length; i++) {
if (numeros[i] % 2 === 0) {
numeros.splice(i, 1);
}
}
return numeros;
}
console.log(removerPares());*/
function removerPares() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numeros.splice(i, 1);
            i--; // faltou incrementar o i --/*
        }
    }
    return numeros;
}
console.log(removerPares());
//13.=======================================================================================
/*function imprimirDoFim(): void {
const numeros: number[] = [10, 20, 30, 40];
for (let i = numeros.length; i >= 0; i--) { // está faltando o -1 para a contagem regressiva
console.log(numeros[i]);
}
}
imprimirDoFim();*/
function imprimirDoFim() {
    const numeros = [10, 20, 30, 40];
    for (let i = numeros.length - 1; i >= 0; i--) {
        console.log(numeros[i]);
    }
}
imprimirDoFim();
//14.=======================================================================================
/*for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) { // estava faltando um segundo for
        console.log("(" + i + ", " + i + ")");
    }
}


imprimirGrade();*/
function imprimirGrade() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log("(" + i + ", " + j + ")");
        }
    }
}
imprimirGrade();
//15.=======================================================================================
/*function coletarPares(): number[] {
const candidatos: number[] = [1, 3, 5, 7, 9, 11];
const pares: number[] = [];
let i = 0;
while (pares.length < 5) {
if (candidatos[i] % 2 === 0) { // não há numeros pares para serem achados
pares.push(candidatos[i]);
}
i++;
}
return pares;
}
console.log(coletarPares());*/
function coletarPares() {
    const candidatos = [2, 1, 4, 9, 8, 10, 3, 12];
    const pares = [];
    let i = 0;
    while (pares.length < 5) {
        if (candidatos[i] % 2 === 0) {
            pares.push(candidatos[i]);
        }
        i++;
    }
    return pares;
}
console.log(coletarPares());
//16.=======================================================================================
/*function imprimirComIndice(): void {
const nomes: string[] = ["Ana", "Bruno", "Carla"];
for (const [nome, indice] of nomes.entries()) {  // inverteu as posições do nome e do índice.
console.log(indice + ": " + nome);
}
}
imprimirComIndice();*/
function imprimirComIndice() {
    const nomes = ["Ana", "Bruno", "Carla"];
    for (const [indice, nome] of nomes.entries()) {
        console.log(indice + ": " + nome);
    }
}
imprimirComIndice();
//17.=======================================================================================
/*function juntarNomes(): string {
const nomes: string[] = ["Ana", "Bruno", "Carla"];
let resultado = "";
for (let i = 0; i < nomes.length; i++) { // faltou o If
resultado += nomes[i] + ", ";
}
return resultado;
}
console.log(juntarNomes());*/
function juntarNomes() {
    const nomes = ["Ana", "Bruno", "Carla"];
    let resultado = "";
    for (let i = 0; i < nomes.length; i++) {
        resultado += nomes[i];
        if (i < nomes.length - 1) {
            resultado += ", ";
        }
    }
    return resultado;
}
console.log(juntarNomes());
//# sourceMappingURL=debbug_loop.js.map