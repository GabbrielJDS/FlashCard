
class Professor {
    constructor() {
        this.flashCard = new FlashCard();
        this.indice = 0;
    }

    getFlashCard() {
        return this.flashCard;
    }

    setFlashCard(flashCard) {
        this.flashCard = flashCard;
    }

    getIndice() {
        return this.indice;
    }

    setIndice(indice) {
        this.indice = indice;
    }

    gravarFlashCard() {
        let escrever = new EscritorDePerguntasJSON();
        escrever.adicionar(this.getFlashCard());
    }

    removerFlashCard() {
        let remover = new EscritorDePerguntasJSON();
        remover.remover(this.getIndice());
    }

    listarFlashCard() {
        let ler1 = new LeitorDePerguntaJSON();
        // ler1.adicionar(this.getFlashCards()); // Comentado porque a função adicionar não está definida na classe LeitorDePerguntaJSON
    }

    listarFlashCards() {
        let lerTodos = new LeitorDePerguntaJSON();
        lerTodos.lerArq();
    }

    // validarSenha(senhaIn) {
    //     let validacao = false;
    //     if (senhaIn === senha && senhaIn !== null) {
    //         validacao = true;
    //     }
    //     return validacao;
    // }
}
