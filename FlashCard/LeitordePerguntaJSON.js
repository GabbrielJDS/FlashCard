// Não há uma tradução direta de pacotes em JavaScript, então podemos omitir o pacote src.leituraEscritraDeArquivo
// Supondo que FlashCard seja uma classe ou objeto existente em JavaScript
// Supondo que você está usando o módulo 'fs' para manipulação de arquivos em Node.js

const fs = require('fs');

class LeitorDePerguntaJSON {
    constructor() {
        try {
            const jsonContent = fs.readFileSync('./jsonFiles/Perguntas.json', 'utf-8');
            const jsonObj = JSON.parse(jsonContent);
            this.listaDeFlashCards = jsonObj.flashCards;
            this.retorno = true;
            this.lerSenha();
        } catch (err) {
            this.retorno = false;
        }
    }

    getListaDeAlternativas(pergunta) {
        const alternativasJson = pergunta.alternativas;
        return alternativasJson.map(alternativa => alternativa);
    }

    getFlashCard(indice) {
        const flashCardJson = this.listaDeFlashCards[indice];
        const flashCard = new FlashCard();
        flashCard.setPergunta(flashCardJson.pergunta);
        flashCard.setResposta(flashCardJson.resposta);
        const listaDeAlternativas = this.getListaDeAlternativas(flashCardJson);
        flashCard.setAlternativas(listaDeAlternativas);
        return flashCard;
    }

    getListaFlashCard() {
        return this.listaDeFlashCards.map((_, index) => this.getFlashCard(index));
    }

    tamanhoLista() {
        return this.listaDeFlashCards.length;
    }

    getListaFlashCardJ() {
        return this.listaDeFlashCards;
    }

    lerArq() {
        try {
            const jsonContent = fs.readFileSync('./jsonFiles/Perguntas.json', 'utf-8');
            const jsonObj = JSON.parse(jsonContent);
            const flashCards = jsonObj.flashCards;

            for (const flashCard of flashCards) {
                console.log("Pergunta: " + flashCard.pergunta);
                console.log("Resposta: " + flashCard.resposta);
                console.log("Alternativas:");
                for (const alternativa of flashCard.alternativas) {
                    console.log(alternativa);
                }
                console.log();
            }
        } catch (err) {
            console.error(err);
        }
    }

    lerSenha() {
        try {
            const jsonContent = fs.readFileSync('./jsonFiles/Senha.json', 'utf-8');
            const jsonObj = JSON.parse(jsonContent);
            this.senha = jsonObj.senha;
        } catch (err) {
            this.retorno = false;
        }
    }

    getSenha() {
        this.lerSenha();
        return this.senha;
    }
}
