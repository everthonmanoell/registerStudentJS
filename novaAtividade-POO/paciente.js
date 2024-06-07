class App {
    #login;
    #senha;
    pacientes = [];
    
    executar() {
        while (true) {
            console.log("Bem vindo ao sistema de gerenciamento de paciente\n");
            this.menu();
        }
    }

    menu() {
        console.log("Escolha uma opção válida\n");
        console.log("1. Cadastrar paciente");
        console.log("2. Listar todos os pacientes");
        console.log("3. Buscar por nome");
        console.log("4. Atualizar dados");
        console.log("5. Excluir paciente");
        console.log("6. Gerenciar Exames");
        console.log("7. Gerenciar Roupas");
        console.log("0. Sair do sistema\n");
        let opInical = parseInt(prompt("Digite sua opção: "));
        console.log("\n");

        switch (opInical) {
            case 1:
                this.menuCadastroPaciente();
                break;
            case 2:
                this.listarTodosPaciente();
                break;
            case 3:
                this.buscarPorNome();
                break;
            case 4:
                this.atualizarPaciente();
                break;
            case 5:
                this.excluirPaciente();
                break;
            case 6:
                this.menuExames();
                break;
            case 7:
                this.menuRoupas();
                break;
            case 0:
                console.log("Saindo do sistema...");
                process.exit(0);
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }

    menuCadastroPaciente() {
        console.log("1. Cadastrar homem");
        console.log("2. Cadastrar mulher");
        console.log("0. Voltar\n");
        let op2 = parseInt(prompt("Digite sua opção: "));
        console.log("\n");

        switch (op2) {
            case 1:
                this.cadastrarPaciente("homem");
                break;
            case 2:
                this.cadastrarPaciente("mulher");
                break;
            case 0:
                console.log("Voltando ao menu principal...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }

    menuExames() {
        console.log("1. Adicionar Exame");
        console.log("2. Listar Exames");
        console.log("0. Voltar\n");
        let op2 = parseInt(prompt("Digite sua opção: "));
        console.log("\n");

        switch (op2) {
            case 1:
                this.adicionarExame();
                break;
            case 2:
                this.listarExamesPaciente();
                break;
            case 0:
                console.log("Voltando ao menu principal...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }

    menuRoupas() {
        console.log("1. Adicionar Roupa");
        console.log("2. Listar Roupas");
        console.log("0. Voltar\n");
        let op2 = parseInt(prompt("Digite sua opção: "));
        console.log("\n");

        switch (op2) {
            case 1:
                this.adicionarRoupaPaciente();
                break;
            case 2:
                this.listarRoupaPaciente();
                break;
            case 0:
                console.log("Voltando ao menu principal...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }

    // Funções //

    cadastrarPaciente(genero) {
        let nome = prompt("Digite o nome: ").toUpperCase();
        let altura = parseFloat(prompt("Digite a altura: "));
        let peso = parseFloat(prompt("Digite o peso: "));
        let corOlho = prompt("Digite a cor do olho: ");
        let tamanhoCabelo = prompt("Digite o tamanho do cabelo: ");
        let corCabelo = prompt("Digite a cor do cabelo: ");
        let tipoCabelo = prompt("Digite o tipo do cabelo: ");
        console.log("\nVocê quer adicionar a roupa? ");
        let roupa = prompt("s - para sim / n - para não: ").toLowerCase();

        if (genero.toLowerCase() === 'homem' && roupa === 'n') {
            const paciente = new Homem(altura, peso, corOlho, corCabelo, tamanhoCabelo, tipoCabelo, nome);
            this.pacientes.push(paciente);
        } else if (genero.toLowerCase() === 'mulher' && roupa === "n") {
            const paciente = new Mulher(altura, peso, corOlho, corCabelo, tamanhoCabelo, tipoCabelo, nome);
            this.pacientes.push(paciente);
        } else if (genero.toLowerCase() === 'homem' && roupa === "s") {
            const paciente = new Homem(altura, peso, corOlho, corCabelo, tamanhoCabelo, tipoCabelo, nome);
            paciente.adicionarRoupas();
            this.pacientes.push(paciente);
        } else {
            const paciente = new Mulher(altura, peso, corOlho, corCabelo, tamanhoCabelo, tipoCabelo, nome);
            paciente.adicionarRoupas();
            this.pacientes.push(paciente);
        }
    }

    listarTodosPaciente() {
        if (this.pacientes.length === 0) {
            console.log("Nenhum paciente cadastrado.");
        } else {
            console.log(`Total de pacientes cadastrados: [ ${this.pacientes.length} ].`);
            this.pacientes.forEach(paciente => {
                console.log("---------------------");
                console.log(`Nome: ${paciente.nome}`);
                console.log(`Altura: ${paciente.altura}m`);
                console.log(`Peso: ${paciente.peso}kg`);
            });
            console.log("---------------------\n");
        }
    }

    buscarPorNome() {
        let nome = prompt("Digite o nome do paciente que quer buscar: ").toUpperCase();
        if (this.pacientes.length === 0) {
            console.log("Nenhum paciente foi cadastrado.");
        } else {
            for (const paciente of this.pacientes) {
                if (nome === paciente.nome) {
                    console.log("------------------------");
                    console.log(`Nome: ${paciente.nome}`);
                    console.log(`Altura: ${paciente.altura}`);
                    console.log(`Peso: ${paciente.peso}`);
                    paciente.listarRoupas();
                    paciente.listarExames();
                }
            }
            console.log("------------------------\n");
        }
    }

    atualizarPaciente() {
        const paciente = this.encontrarPaciente();
        if (paciente != null) {
            paciente.nome = prompt("Digite o novo nome: ").toUpperCase();
            paciente.altura = parseFloat(prompt("Digite a sua altura: "));
            paciente.peso = parseFloat(prompt("Digite o seu peso: "));
            paciente.corOlho = prompt("Digite a cor do olho: ");
            paciente.corCabelo = prompt("Digite a cor do cabelo: ");
            paciente.tipoCabelo = prompt("Digite o tipo do cabelo: ");
            paciente.tamanhoCabelo = prompt("Digite o tamanho do cabelo: ");
            console.log("\n Dados atualizados com sucesso!");
        }
    }

    excluirPaciente() {
        let nome = prompt("Digite o nome do paciente que deseja excluir: ").toUpperCase();
        let index = this.pacientes.findIndex(paciente => paciente.nome === nome);
        if (index === -1) {
            console.log("Paciente não encontrado.");
            return;
        }
        this.pacientes.splice(index, 1);
        console.log("Paciente removido com sucesso.");
    }

    // --- Função para encontrar paciente ---
    encontrarPaciente() {
        let nome = prompt("Digite o nome do paciente: ").toUpperCase();
        if (this.pacientes.length === 0) {
            console.log("Não tem pacientes cadastrados.");
            return null;
        }
        let paciente = this.pacientes.find(paciente => paciente.nome === nome);
        if (!paciente) {
            console.log("Paciente não encontrado");
            return null;
        }
        return paciente;
    }

    // Adicionar e listar roupas de determinado paciente 
    listarRoupaPaciente() {
        const paciente = this.encontrarPaciente();
        if (paciente != null) {
            paciente.listarRoupas();
        }
    }

    adicionarRoupaPaciente() {
        const paciente = this.encontrarPaciente();
        if (paciente != null) {
            paciente.adicionarRoupas();
        }
    }

    adicionarExame() {
        console.log("1. Exame de Próstata");
        console.log("2. Exame de Mama");
        console.log("0. Voltar\n");
        let opExame = parseInt(prompt("Escolha o exame que deseja adicionar: "));
        console.log("\n");
        switch (opExame) {
            case 1:
                this.adicionarExameDeProstata();
                break;
            case 2:
                this.adicionarExameDeMama();
                break;
            case 0:
                console.log("Voltando ao menu anterior...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }

    adicionarExameDeProstata() {
        const paciente = this.encontrarPaciente();
        if (paciente != null) {
            paciente.adicionarExameDeProstata();
        }
    }

    adicionarExameDeMama() {
        const paciente = this.encontrarPaciente();
        if (paciente != null) {
            paciente.adicionarExameDeMama();
        }
    }

    listarExamesPaciente() {
        const paciente = this.encontrarPaciente();
        if (paciente != null) {
            paciente.listarExames();
        }
    }
}

// ---- Composição -----
class Paciente {
    #altura;
    #peso;
    #nome;

    constructor(altura, peso, nome) {
        this.#altura = altura;
        this.#peso = peso;
        this.#nome = nome;
    }

    get altura() {
        return this.#altura;
    }

    set altura(altura) {
        this.#altura = altura;
    }

    get peso() {
        return this.#peso;
    }

    set peso(peso) {
        this.#peso = peso;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }
}

class Olho {
    #cor;

    constructor(cor) {
        this.#cor = cor;
    }

    get corOlho() {
        return this.#cor;
    }

    set corOlho(cor) {
        this.#cor = cor;
    }
}

// ---- Agregração ----
class Cabelo {
    #cor;
    #tamanho;
    #tipo;

    constructor(cor, tamanho, tipo) {
        this.#cor = cor;
        this.#tamanho = tamanho;
        this.#tipo = tipo;
    }

    get corCabelo() {
        return this.#cor;
    }

    set corCabelo(cor) {
        this.#cor = cor;
    }

    get tamanhoCabelo() {
        return this.#tamanho;
    }

    set tamanhoCabelo(tamanho) {
        this.#tamanho = tamanho;
    }

    get tipoCabelo() {
        return this.#tipo;
    }

    set tipoCabelo(tipo) {
        this.#tipo = tipo;
    }
}

class Roupa {
    #tipo;
    #quantidade;
    #cor;

    constructor(tipo, quantidade, cor) {
        this.#tipo = tipo;
        this.#quantidade = quantidade;
        this.#cor = cor;
    }

    get tipo() {
        return this.#tipo;
    }

    set tipo(tipo) {
        this.#tipo = tipo;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set quantidade(quantidade) {
        this.#quantidade = quantidade;
    }

    get cor() {
        return this.#cor;
    }

    set cor(cor) {
        this.#cor = cor;
    }
}

// ----- Exames -----
class Exame {
    #nome;
    #data;
    #resultado;

    constructor(nome, data, resultado) {
        this.#nome = nome;
        this.#data = data;
        this.#resultado = resultado;
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
    }

    get resultado() {
        return this.#resultado;
    }

    set resultado(resultado) {
        this.#resultado = resultado;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }
}

class ExameDeMama extends Exame {
    constructor(data, resultado) {
        super("Exame de Mama", data, resultado);
    }
}

class ExameDeProstata extends Exame {
    constructor(data, resultado) {
        super("Exame de Próstata", data, resultado);
    }
}

// ----- Entidades --------
class Homem extends Paciente {
    #cabelo = "";
    #olho = "";
    #roupas = [];
    #exames = [];

    constructor(altura, peso, corOlho, corCabelo, tamanhoCabelo, tipoCabelo, nome) {
        super(altura, peso, nome);
        this.#olho = new Olho(corOlho);
        this.#cabelo = new Cabelo(corCabelo, tamanhoCabelo, tipoCabelo);
    }

    get olho() {
        return this.#olho;
    }

    set olho(olho) {
        this.#olho = olho;
    }

    get cabelo() {
        return this.#cabelo;
    }

    set cabelo(cabelo) {
        this.#cabelo = cabelo;
    }

    listarRoupas() {
        if (this.#roupas.length === 0) {
            console.log("Não tem roupa cadastrada.");
            return;
        }
        console.log("\nRoupas:");
        for (let i = 0; i < this.#roupas.length; i++) {
            console.log("--------------------");
            console.log(`Tipo: ${this.#roupas[i].tipo}`);
            console.log(`Quantidade: ${this.#roupas[i].quantidade}`);
            console.log(`Cor: ${this.#roupas[i].cor}`);
        }
        console.log("--------------------");
    }

    adicionarRoupas() {
        console.log("Adicionando roupas");
        console.log("------------\n");
        let tipo = prompt("Digite o tipo da roupa: ");
        let quantidade = prompt("Digite a quantidade da roupa: ");
        let cor = prompt("Digite a cor da roupa: ");

        const roupa = new Roupa(tipo, quantidade, cor);
        this.#roupas.push(roupa);
    }

    // ----- Funções de Exames -----
    adicionarExameDeProstata() {
        let data = prompt("Digite a data do exame: ");
        let resultado = prompt("Digite o resultado do exame: ");

        const exame = new ExameDeProstata(data, resultado);
        this.#exames.push(exame);
    }

    listarExames() {
        if (this.#exames.length === 0) {
            console.log("Não tem exame cadastrado.");
            return;
        }

        console.log("Lista de exames\n");
        for (const exame of this.#exames) {
            console.log("--------------------");
            console.log(`Nome do exame: ${exame.nome}`);
            console.log(`Data do exame: ${exame.data}`);
            console.log(`Resultado do exame: ${exame.resultado}`);
        }
        console.log("--------------------\n");
    }
}

class Mulher extends Paciente {
    #olho = "";
    #cabelo = "";
    #roupas = [];
    #exames = [];

    constructor(altura, peso, corOlho, corCabelo, tamanhoCabelo, tipoCabelo, nome) {
        super(altura, peso, nome);
        this.#olho = new Olho(corOlho);
        this.#cabelo = new Cabelo(corCabelo, tamanhoCabelo, tipoCabelo);
    }

    get olho() {
        return this.#olho;
    }

    set olho(olho) {
        this.#olho = olho;
    }

    get cabelo() {
        return this.#cabelo;
    }

    set cabelo(cabelo) {
        this.#cabelo = cabelo;
    }

    listarRoupas() {
        if (this.#roupas.length === 0) {
            console.log("Não tem roupa cadastrada.");
            return;
        }
        console.log("\nRoupas:");
        for (let i = 0; i < this.#roupas.length; i++) {
            console.log("--------------------");
            console.log(`Tipo: ${this.#roupas[i].tipo}`);
            console.log(`Quantidade: ${this.#roupas[i].quantidade}`);
            console.log(`Cor: ${this.#roupas[i].cor}`);
        }
        console.log("--------------------");
    }

    adicionarRoupas() {
        console.log("Adicionando roupas");
        console.log("------------\n");
        let tipo = prompt("Digite o tipo da roupa: ");
        let quantidade = prompt("Digite a quantidade da roupa: ");
        let cor = prompt("Digite a cor da roupa: ");

        const roupa = new Roupa(tipo, quantidade, cor);
        this.#roupas.push(roupa);
    }

    // ----- Funções de Exames -----
    adicionarExameDeMama() {
        let data = prompt("Digite a data do exame: ");
        let resultado = prompt("Digite o resultado do exame: ");

        const exame = new ExameDeMama(data, resultado);
        this.#exames.push(exame);
    }

    listarExames() {
        if (this.#exames.length === 0) {
            console.log("Não tem exame cadastrado.");
            return;
        }

        console.log("Lista de exames\n");
        for (const exame of this.#exames) {
            console.log("--------------------");
            console.log(`Nome do exame: ${exame.nome}`);
            console.log(`Data do exame: ${exame.data}`);
            console.log(`Resultado do exame: ${exame.resultado}`);
        }
        console.log("--------------------\n");
    }
}

const app = new App();
app.executar();
