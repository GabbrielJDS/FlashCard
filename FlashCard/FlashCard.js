class FlashCard {
    constructor() {
        this.pergunta = '';
        this.resposta = '';
        this.alternativas = new Array(4).fill(''); // Inicializa o array de alternativas com 4 elementos vazios
    }

    setPergunta(pergunta) {
        this.pergunta = pergunta;
    }

    setResposta(resposta) {
        this.resposta = resposta;
    }

    getAlternativas() {
        return this.alternativas;
    }

    getPergunta() {
        return this.pergunta;
    }

    getResposta() {
        return this.resposta;
    }

    setAlternativas(alternativas) {
        this.alternativas = alternativas;
    }

    toString() {
        let flashcard = this.pergunta + " " + this.resposta + " " + this.alternativas.join(' ');
        return flashcard;
    }
}
