class Aluno {
    constructor() {
        this.leitor = new LeitorDePerguntaJSON();
        this.listaFC = flashCard.getListaFlashCard();

        this.caixa1 = new Set();
        this.caixa2 = new Set();
        this.caixa3 = new Set();

        this.fila = [];

        this.resposta = '';
        this.indice = 0;
        this.pontuacao = 0;
    }

    filaPeguntas() {
        if (this.caixa1.size > 0) {
            this.fila.push(...this.caixa1);
        }
        if (this.caixa2.size > 0) {
            this.fila.push(...this.caixa2);
        }
        if (this.caixa3.size > 0) {
            this.fila.push(...this.caixa3);
        }
    }

    pergunta() {
        let pergunta;
        if (this.fila.length === 0) {
            this.filaPeguntas();
        }
        pergunta = this.fila[0].getPergunta();
        return pergunta;
    }

    sortearFlashcard() {
        let random = Math.floor(Math.random() * this.listaFC.length);
        while (this.caixa1.size < 10 && this.caixa1.size < this.leitor.getListaFlashCard().length) {
            this.caixa1.add(this.listaFC[random]);
        }
    }

    setResposta(resposta) {
        this.resposta = resposta;
    }

    verificarResposta() {
        let r = false;
        if (this.resposta === this.fila[0].getResposta()) {
            r = true;
            this.pontuacao++;
        }
        return r;
    }

    modificarCaixa() {
        let verifResposta = this.verificarResposta();
        let elemento = this.fila[0];
        if (verifResposta) {
            this.fila.shift();
            if (this.caixa1.has(elemento)) {
                this.caixa1.delete(elemento);
                this.caixa2.add(elemento);
            } else if (this.caixa2.has(elemento)) {
                this.caixa2.delete(elemento);
                this.caixa3.add(elemento);
            }
        } else {
            this.fila.shift();
            if (this.caixa2.has(elemento)) {
                this.caixa2.delete(elemento);
                this.caixa1.add(elemento);
            } else if (this.caixa3.has(elemento)) {
                this.caixa3.delete(elemento);
                this.caixa1.add(elemento);
            }
        }
    }

    setIndice(indice) {
        this.indice = indice;
    }

    getIndice() {
        return this.indice;
    }

    getPontuacao() {
        return this.pontuacao;
    }
}
