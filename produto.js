class app {
    #login = '';
    #senha = '';
    produtos = [];

    // Executar
    executar() {


        console.log("Bem vindo ao sistema de gerenciamento de estoque\n");

        while (true) {
            console.log("Sistema de gerenciamento de estoque");
            this.#login = prompt('Digite o login: ');
            this.#senha = prompt('Digite a senha: ');



            if (this.#login === 'adm' && this.#senha === '123') {
                console.log("Usuário correto! Entrou no sistema!\n");
                this.menu();

            } else {

                console.log("Usuário ou senha incorretos. Tente novamente!");

            }
        }



    }

    // Menu
    menu() {
        let op;
        console.log("Bem-vindo ao sistema! ");
        do {

            console.log(" \n");
            console.log("1. Cadastrar produto");
            console.log("2. Listar produtos");

            op = prompt("Digite sua opção: ");

            switch (parseInt(op)) {
                case 1:
                    this.adicionarEstoque();
                    break;
                case 2:
                    this.listarProdutos();
                    break;

                case 0:
                    console.log("Saindo do sistema...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (parseInt(op) !== 0);
    }

    // Funções de Produto

    //adicionar Grão
    adicionarGrao() {
        nome = prompt("Digite o nome do produto de limpeza: ");
        descricao = prompt("Digite a descricao do grão: ");
        preco = prompt("Digite o preço do grão: ");
        quantidade = prompt("Digite a quantidade do grão: ");
        peso = prompt("Digite o peso do grão: ");
        marca = prompt("Digite a marca do grão: ");
        validade = prompt("Digite a validade grão: ");

        const grao = new Grao(nome, descricao, preco, quantidade, peso, marca, validade);
        this.produtos.push(grao);
    }

    //adicionar Limpeza
    adicionarLimpeza() {
        nome = prompt("Digite o nome do produto de limpeza: ");
        descricao = prompt("Digite a descricao do produto de limpeza: ");
        preco = prompt("Digite o preço do produto de limpeza: ");
        quantidade = prompt("Digite a quantidade do produto de limpeza: ");
        tipo = prompt("Digite o tipo do produto de limpeza: ");
        pesoLiquido = prompt("Digite a pesoLiquido do produto de limpeza: ");
        validade = prompt("Digite a validade do produto de limpeza: ");
        fragrancia = prompt("Digite a fragrancia do produto de limpeza: ");

        const limpeza = new Limpeza(nome, descricao, preco, quantidade, tipo, pesoLiquido, validade, fragrancia);
        this.produtos.push(limpeza);
    }

    //adicionar Limpeza
    adicionarVestuario() {
        nome = prompt("Digite o nome do vestuario: ");
        descricao = prompt("Digite a descricao do vestuario: ");
        preco = prompt("Digite o preço do vestuario: ");
        quantidade = prompt("Digite a quantidade do vestuario: ");
        tipo = prompt("Digite o tipo do vestuario: ");
        pesoLiquido = prompt("Digite a pesoLiquido do vestuario: ");
        validade = prompt("Digite a validade do vestuario: ");
        fragrancia = prompt("Digite a fragrancia do vestuario: ");

        const vestuario = new Vestuario(nome, descricao, preco, quantidade, marca, cor, tamanho);
        this.produtos.push(vestuario);
    }

    // listar Produtos
    
    listarProdutosPorTipo(tipo) {
        console.log(`Lista de Produtos do tipo ${tipo}:`);
        const produtosDoTipo = this.produtos.filter(produto => produto instanceof tipo);
        
        if (produtosDoTipo.length === 0) {
            console.log("Nenhum produto encontrado para este tipo.");
        } else {
            produtosDoTipo.forEach(produto => {
                console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Descrição: ${produto.descricao}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}`);
            });
        }
    }



}



class Produto {
    static #idAtual = 1;
    #id = 0;
    #nome = '';
    #descricao = '';
    #preco = 0;
    #quantidade = 0;

    constructor(nome, descricao, preco, quantidade) {
        this.#id = Produto.#idAtual++;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#preco = preco;
        this.#quantidade = quantidade;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get nome() {
        return this.#nome;
    }

    set descricao(descricao) {
        this.#descricao = descricao;
    }

    get descricao() {
        return this.#descricao;
    }

    set preco(preco) {
        this.#preco = preco;
    }

    get preco() {
        return this.#preco;
    }

    set quantidade(quantidade) {
        this.#quantidade = quantidade;
    }

    get quantidade() {
        return this.#quantidade;
    }




}

class Grao extends Produto {
    #peso = 0;
    #marca = '';
    #validade = '';

    constructor(nome, descricao, preco, quantidade, peso, marca, validade) {
        super(nome, descricao, preco, quantidade);
        this.#peso = peso;
        this.#marca = marca;
        this.#validade = validade;

    }

    set peso(peso) {
        this.#peso = peso;
    }

    get peso() {
        return this.#peso;
    }

    set marca(marca) {
        this.#marca = marca;
    }

    get marca() {
        return this.#marca;
    }

    set validade(validade) {
        this.#validade = validade;
    }

    get validade() {
        return this.#validade;
    }



}

class Limpeza extends Produto {
    #tipo = '';
    #pesoLiquido = 0;
    #validade = '';
    #fragrancia;
    constructor(nome, descricao, preco, quantidade, tipo, pesoLiquido, validade, fragrancia) {
        super(nome, descricao, preco, quantidade);
        this.#tipo = tipo;
        this.#pesoLiquido = pesoLiquido;
        this.#validade = validade;
        this.#fragrancia = fragrancia;

    }

    set tipo(tipo) {
        this.#tipo = tipo;
    }
    get tipo() {
        return this.#tipo;
    }

    set pesoLiquido(pesoLiquido) {
        this.#pesoLiquido = pesoLiquido;
    }
    get pesoLiquido() {
        return this.#pesoLiquido;
    }

    set validade(validade) {
        this.#validade = validade;
    }
    get validade() {
        return this.#validade;
    }

    set fragrancia(fragrancia) {
        this.#fragrancia = fragrancia;
    }

    get fragrancia() {
        return this.#fragrancia;
    }

}

class Vesturario extends Produto {
    #marca = '';
    #cor = '';
    #tamanho = '';

    constructor(nome, descricao, preco, quantidade, marca, cor, tamanho) {
        super(nome, descricao, preco, quantidade);
        this.#marca = marca;
        this.#cor = cor;
        this.#tamanho = tamanho;
    }
}