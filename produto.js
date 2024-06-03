class App {
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
                console.log("\nUsuário correto! Entrou no sistema!\n");
                this.menu();
            } else {
                console.log("Usuário ou senha incorretos. Tente novamente!");
            }
        }
    }

    // Menu
    menu() {
        let op;
        let opProd;
        let list;
        console.log("Bem-vindo ao sistema! ");
        do {
            console.log(" \n");
            console.log("1. Cadastrar produto");
            console.log("2. Listar produtos");
            console.log('0. Para sair do sistema.');

            op = prompt("Digite sua opção: ");

            switch (parseInt(op)) {
                case 1:
                    console.log("1. Grão");
                    console.log("2. Limpeza");
                    console.log("3. Vestuário");
                    console.log("4. Todos os produtos");
                    console.log("0. Para voltar");

                    opProd = parseInt(prompt("Digite a sua opção: "));
                    switch (opProd) {
                        case 1:
                            this.adicionarGrao();
                            break;
                        case 2:
                            this.adicionarLimpeza();
                            break;
                        case 3:
                            this.adicionarVestuario();
                            break;
                        case 4:
                            this.listarProdutosGeral();
                            break;
                        case 0:
                            console.log("Voltando");
                            break;
                        default:
                            console.log("Opção inválida. Tente novamente.");
                    }
                    break;
                case 2:
                    console.log("1. Grão");
                    console.log("2. Limpeza");
                    console.log("3. Vestuário");
                    console.log("0. Para voltar");
                    list = parseInt(prompt("Digite a sua opção: "));
                    switch (list) {
                        case 1:
                            this.listarProdutosPorTipo(Grao);
                            break;
                        case 2:
                            this.listarProdutosPorTipo(Limpeza);
                            break;
                        case 3:
                            this.listarProdutosPorTipo(Vestuario);
                            break;
                        case 0:
                            console.log("Voltando");
                            break;
                        default:
                            console.log("Opção inválida. Tente novamente.");
                    }
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

    adicionarGrao() {
        const nome = prompt("Digite o nome do grão: ");
        const descricao = prompt("Digite a descrição do grão: ");
        const preco = prompt("Digite o preço do grão: ");
        const quantidade = prompt("Digite a quantidade do grão: ");
        const peso = prompt("Digite o peso do grão: ");
        const marca = prompt("Digite a marca do grão: ");
        const validade = prompt("Digite a validade do grão: ");

        const grao = new Grao(nome, descricao, preco, quantidade, peso, marca, validade);
        this.produtos.push(grao);
    }

    adicionarLimpeza() {
        const nome = prompt("Digite o nome do produto de limpeza: ");
        const descricao = prompt("Digite a descrição do produto de limpeza: ");
        const preco = prompt("Digite o preço do produto de limpeza: ");
        const quantidade = prompt("Digite a quantidade do produto de limpeza: ");
        const tipo = prompt("Digite o tipo do produto de limpeza: ");
        const pesoLiquido = prompt("Digite o peso líquido do produto de limpeza: ");
        const validade = prompt("Digite a validade do produto de limpeza: ");
        const fragrancia = prompt("Digite a fragrância do produto de limpeza: ");

        const limpeza = new Limpeza(nome, descricao, preco, quantidade, tipo, pesoLiquido, validade, fragrancia);
        this.produtos.push(limpeza);
    }

    adicionarVestuario() {
        const nome = prompt("Digite o nome do vestuário: ");
        const descricao = prompt("Digite a descrição do vestuário: ");
        const preco = prompt("Digite o preço do vestuário: ");
        const quantidade = prompt("Digite a quantidade do vestuário: ");
        const marca = prompt("Digite a marca do vestuário: ");
        const cor = prompt("Digite a cor do vestuário: ");
        const tamanho = prompt("Digite o tamanho do vestuário: ");

        const vestuario = new Vestuario(nome, descricao, preco, quantidade, marca, cor, tamanho);
        this.produtos.push(vestuario);
    }

    listarProdutosPorTipo(tipo) {
        let produtoEncontrado = false;  
    
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i] instanceof tipo) {
                this.produtos[i].exibirProduto();
                produtoEncontrado = true;
            }
        }
    
        if (!produtoEncontrado) {
            console.log("Nenhum produto cadastrado deste tipo.");
        }
    }

    listarProdutosGeral(){
        for(let i = 0; i < this.produtos.length; i++){
            this.produtos[i].exibirProduto();
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

    get id() {
        return this.#id;
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

    exibirProduto() {
        console.log("Grão:");
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Validade: ${this.validade}`);
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
    #fragrancia = '';

    constructor(nome, descricao, preco, quantidade, tipo, pesoLiquido, validade, fragrancia) {
        super(nome, descricao, preco, quantidade);
        this.#tipo = tipo;
        this.#pesoLiquido = pesoLiquido;
        this.#validade = validade;
        this.#fragrancia = fragrancia;
    }

    exibirProduto() {
        console.log("Produto de Limpeza:");
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Peso Líquido: ${this.pesoLiquido}`);
        console.log(`Validade: ${this.validade}`);
        console.log(`Fragrância: ${this.fragrancia}`);
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

class Vestuario extends Produto {
    #marca = '';
    #cor = '';
    #tamanho = '';

    constructor(nome, descricao, preco, quantidade, marca, cor, tamanho) {
        super(nome, descricao, preco, quantidade);
        this.#marca = marca;
        this.#cor = cor;
        this.#tamanho = tamanho;
    }

    exibirProduto() {
        console.log("Vestuário:");
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Tamanho: ${this.tamanho}`);
    }

    set marca(marca) {
        this.#marca = marca;
    }

    get marca() {
        return this.#marca;
    }

    set cor(cor) {
        this.#cor = cor;
    }

    get cor() {
        return this.#cor;
    }

    set tamanho(tamanho) {
        this.#tamanho = tamanho;
    }

    get tamanho() {
        return this.#tamanho;
    }
}

const app = new App();
app.executar();
