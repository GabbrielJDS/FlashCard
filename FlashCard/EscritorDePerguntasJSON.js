// Não há uma tradução direta de pacotes em JavaScript, então podemos omitir o pacote src.leituraEscritraDeArquivo
// Supondo que ILeitorDePergunta e FlashCard sejam classes ou objetos existentes em JavaScript

class EscritorDePerguntasJSON {
    constructor() {
        this.listaDeFlashCards = [];
        let leitorDePerguntas = new LeitorDePerguntaJSON(); // Supondo que LeitorDePerguntaJSON seja uma classe ou objeto existente em JavaScript
        this.listaDeFlashCards = leitorDePerguntas.getListaFlashCardJ(); // Supondo que getListaFlashCardJ() seja um método existente na classe LeitorDePerguntaJSON
    }

    adicionar(flashCard) {
        let flashCardJson = {
            pergunta: flashCard.getPergunta(),
            resposta: flashCard.getResposta(),
            alternativas: flashCard.getAlternativas(),
        };

        this.listaDeFlashCards.push(flashCardJson);

        let jsonObject = {
            flashCards: this.listaDeFlashCards,
        };

        try {
            const fs = require('fs');
            fs.writeFileSync('./jsonFiles/Perguntas.json', JSON.stringify(jsonObject));
        } catch (err) {
            console.error(err);
        }
    }

    remover(indice) {
        if (indice < this.listaDeFlashCards.length && indice >= 0) {
            this.listaDeFlashCards.splice(indice, 1);

            let jsonObject = {
                flashCards: this.listaDeFlashCards,
            };

            try {
                const fs = require('fs');
                fs.writeFileSync('./jsonFiles/Perguntas.json', JSON.stringify(jsonObject));
            } catch (err) {
                console.error(err);
            }
        }
    }

    mudarSenha(novaSenha) {
        let senha = {
            senha: novaSenha,
        };

        try {
            const fs = require('fs');
            fs.writeFileSync('./jsonFiles/Senha.json', JSON.stringify(senha));
        } catch (err) {
            console.error(err);
        }
    }
}
