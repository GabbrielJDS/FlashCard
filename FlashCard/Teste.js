// Não há uma tradução direta de pacotes em JavaScript, então podemos omitir o pacote src.leituraEscritraDeArquivo
// Supondo que ILeitorDePergunta, LeitorDePerguntaJSON, IEscritorDePergunta e EscritorDePerguntasJSON
// sejam classes ou objetos existentes em JavaScript
// Supondo que FlashCard seja uma classe ou objeto existente em JavaScript

class Teste {
    static main(args) {
        console.log("Teste de leitura:");
        const leitor = new LeitorDePerguntaJSON();
        leitor.lerArq();
        console.log("Teste de leitura: OK");

        console.log("Teste de Escrita (adicionar):");
        console.log("Adicionar pergunta: 2 + 2 = ?");
        console.log("Resposta: b");
        console.log("Alternativas:\n a) 1 \n b) 2 \n c) 3 \n d) 4");
        const fc = new FlashCard();
        fc.setPergunta("2 + 2 = ?");
        fc.setResposta("b");
        const alternativas = ["a) 1", "b) 2", "c) 3", "d) 4"];
        fc.setAlternativas(alternativas);
        const escritor = new EscritorDePerguntasJSON();
        escritor.adicionar(fc);
        leitor.lerArq();
        console.log("Teste de Escrita: OK");

        console.log("Teste de Escrita (remocao):");
        escritor.remover(0);
        leitor.lerArq();
        console.log("Teste de Escrita (remocao): OK");

        console.log("Teste de Alteracao de senha: ");
        console.log("Senha antiga: " + leitor.getSenha());
        escritor.mudarSenha("152");
        console.log("Senha atual: " + leitor.getSenha());
        console.log("Teste de Alteracao de senha: OK");
    }
}
