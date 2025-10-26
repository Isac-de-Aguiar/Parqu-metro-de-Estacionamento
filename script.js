class Parquimetro {
    constructor() {
        this.tempoDisponivel = 0;
        this.valorPago = 0;
    }

    pagamento() {
        const valor = document.getElementById("valorInserido");
        const tempo = document.getElementById("tempo");
        const troco = document.getElementById("troco");

        // coonvertendo o valor digitado com valor após a vírgula
        const valorConvertido = parseFloat(valorInserido.value.replace(",", "."));
        
        if(isNaN(valorConvertido) || valorConvertido <= 0) {
            alert("Valor inválido");
            return;
        }

        // Tabela de preços

        const tabela = [
            { valor: 1.00, tempo: 30 },
            { valor: 1.75, tempo: 60 },
            { valor: 3.00, tempo: 120 }
        ];

        // Verifica o valor inserido pelo usuário
        let tempoEncontrado = 0;
        let valorEncontrado = 0;

        for(let item of tabela) {
            if(valorConvertido >= item.valor) {
                tempoEncontrado = item.tempo;
                valorEncontrado = item.valor;
            }
        }

        if (tempoEncontrado === 0) {
            alert("Valor insuficiente! O mínimo é R$1,00.");
            return;
        }

        const trocoCliente = (valorConvertido - valorEncontrado).toFixed(2);
    
        this.valorPago = valorEncontrado;
        this.tempoDisponivel = tempoEncontrado;

        tempo.innerText = `${this.tempoDisponivel} minutos`;
        troco.innerText = `R$ ${trocoCliente}`;

        alert(`✅ Pagamento aceito!`);

        valor.value = "";
    
    }
}

const parquimetro = new Parquimetro();
    
