const num1 = 150
const num2 = 239
const num3 = 24


// 1 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, 
//duas constantes com os valores que serão comparados.
const comparingTwoNumbers = (a , b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(comparingTwoNumbers(num1, num2))

// 2 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, 
//três constantes com os valores que serão comparados.
const comparingThreeNumbers = (a, b, c) => {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }
}
console.log(comparingThreeNumbers(num1, num2, num3))

// 3 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, 
// “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
const positiveOrNegative = (a) => {
    if (a > 0) {
        return `positive`
    } else if (a < 0) {
        return `negative`
    } else {
        return `zero`
    }
}
console.log(positiveOrNegative(num1))

/* 4 - 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. 
Retorne TRUE se os ângulos representarem os ângulos de um triângulo e FALSE, caso contrário. Se algum ângulo for inválido, 
você deve retornar uma mensagem de erro.
- Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
- Um ângulo será considerado inválido se não tiver um valor positivo. */
const anglesOfATriangle = (n1, n2, n3) => {
    const angle1 = n1;
    const angle2 = n2;
    const angle3 = n3;

    if (n1 + n2 + n3 === 180) {
        return true
    } else if (n1 + n2 + n3 > 180 || n1 + n2 + n3 < 180 && n1 + n2 + n3 >= 0 ) { 
        return `False, para os ângulos serem de um triângulo válido, a soma dos três triângulos deve ser 180°`
    } else {
        return `False, um ângulo será cosiderado invalido se não tiver um valor positivo`
    }
}
console.log(anglesOfATriangle(-60, -40, -60))

/*Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/ 

const getNote = (note) => {
    if (note < 50 && note > 0) {
        return 'F'
    } else if (note >= 50 && note < 60) {
        return 'E'
    } else if (note >= 60 && note < 70 ){
        return 'D'
    } else if (note >= 70 && note < 80) {
        return 'C'
    } else if (note >= 80 && note < 90){
        return 'B'
    } else if (note >= 90 && note <= 100) {
        return 'A'
    } else {
        return `ERROR: A nota precisa ser um número entre 0 e 100`
    }
}
console.log(getNote(3))

/* 5 - Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. 
Caso contrário, ele deve retornar false.
*Bonus: use somente um if.*/
const haveNumberEven = (n1, n2, n3) => {
    const num1 = n1;
    const num2 = n2;
    const num3 = n3;

    if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
        return true
    } return false

} 
console.log(haveNumberEven(3,4,9))

/* 6 - Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. 
Caso contrário, ele deve retornar false.
Bonus: use somente um if. */
const haveNumberOdd = (n1, n2, n3) => {
    const num1 = n1;
    const num2 = n2;
    const num3 = n3;

    if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0) {
        return true
    } return false

} 
console.log(haveNumberOdd(2,9,8))

/*Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. 
A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
- Atente que, sobre o custo do produto, incide um imposto de 20%.
- Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
- O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
- valorCustoTotal = valorCusto + impostoSobreOCusto;
- lucro = valorVenda - valorCustoTotal (lucro de um produto); */
const totalProfit = (costPrice/*, saleValue */) => {
    const taxRate = costPrice * (costPrice/100) 
    return taxRate
}
console.log(totalProfit(100))

