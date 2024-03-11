const calculaFibonacci = () => {

    const numero = document.getElementById('number').value;
    let fibonacci = [0, 1]
    let index = 1;

    if(numero == 0) { // CASO ENTRADA SEJA 0
        return alert(`Sequência de Fibonacci: ${fibonacci} \n\n
        O número ${numero} está na sequência de Fibonacci`);
    }

    while(fibonacci[index] <= numero) {

        let value = fibonacci[index] + fibonacci[index - 1]
        fibonacci.push(value);
        index++;

        console.log(`index: ${fibonacci[index]} NUM: ${numero}`);  

        if(fibonacci[index] == numero) {
            return alert(`Sequência de Fibonacci: ${fibonacci} \n\n
            O número ${numero} está na sequência de Fibonacci`);
        }
    }

    return alert(`Sequência de Fibonacci: ${fibonacci} \n\n
    O número ${numero} NÃO está na sequência de Fibonacci`);

}