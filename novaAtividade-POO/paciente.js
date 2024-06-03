class App {
    #login;
    #senha;
    pacientes = [];

    executar() {

        while (true) {
            console.log("Bem vindo ao sistema de gerencialmento de paciente\n");
            this.menu();
        }

    }

    menu() {

        console.log("Escolha uma opção valida\n")
        console.log("1. Cadastrar paciente");
        console.log("2. Listar pacientes");
        console.log("0. Sair do sistema\n");
        let opInical = parseInt(prompt("Digite sua opção: "));
        console.log("\n");
        let op2;

        switch (opInical) {
            case 1:
                console.log("1. Cadastrar homem");
                console.log("2. Cadastrar mulher");
                console.log("0. Sair do sistema\n");
                op2 = parseInt(prompt("Digite sua opção: "));
                console.log("\n");

                switch (op2) {
                    case 1:
                        this.cadastrarPaciente("homem");
                        break;
                    case 2:
                        this.cadastrarPaciente("mulher");
                        break;
                    case 0:
                        console.log("Saindo do sistema...");
                    default:
                        console.log("Opção inválida. Tente novamente.");
                }
                break;
            case 2:
                this.listarTodosPaciente();
                break;
            case 0:
                console.log("Saindo do sistema...");
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


        if (genero.toLowerCase() === 'homem') {

            const paciente = new Homem(altura, peso, corOlho, corCabelo, tamanhoCabelo, tipoCabelo, nome);
            this.pacientes.push(paciente);
        } else {
            const paciente = new Mulher(altura, peso, corOlho, corCabelo, tamanhoCabelo, tipoCabelo, nome);
            this.pacientes.push(paciente);
        }
    }

    listarTodosPaciente() {
        if (this.pacientes.length === 0) {
            console.log("Nenhum paciente cadastrado.")
        } else {
            console.log(`Total de pacientes cadastrados: [ ${this.pacientes.length} ].`);

            this.pacientes.forEach(paciente => {
                console.log("---------------------");
                console.log(`Nome: ${paciente.nome}`);
                console.log(`Altura: ${paciente.altura}m`);
                console.log(`Peso: ${paciente.peso}kg`);


            })
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
                    console.log(`Alutra: ${paciente.altura}`);
                    console.log(`Peso: ${paciente.peso}`);
                }
            }
            console.log("------------------------\n");
            return;
        }
        console.log("Não encontramos o nome do paciente em nossa base de dados ou você digitou errado.");
    }

    atualizarPaciente(nome) {
        if (this.pacientes.length === 0) {
            console.log("Não tem pacientes cadastrados.");
            return;
        }

        let paciente = this.pacientes.find(paciente => nome === paciente.nome);
        if (!paciente){
            console.log("Paciente não encontrado.");
            return
        }

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

class Homem extends Paciente {
    #cabelo = "";
    #olho = "";
    #roupas = [];


    constructor(altura, peso, corOlho, corCabelo, tamanhoCabelo, tipoCabelo, nome) {
        super(altura, peso, nome);
        this.#olho = new Olho(corOlho);
        this.#cabelo = new Cabelo(corCabelo, tamanhoCabelo, tipoCabelo);

    }

    get olho() {
        return this.olho;
    }

    set olho(olho) {
        this.olho = olho;
    }

    get cabelo() {
        return this.cabelo;
    }

    set cabelo(cabelo) {
        this.cabelo = cabelo;
    }

    listarRoupas() {
        for (let i = 0; i < this.roupas.length; i++) {
            console.log(this.#roupas[i]);
        }
    }

    adicionarRoupas() {
        let tipo = prompt("Digite o tipo da roupa: ");
        let quantidade = prompt("Digite a quantidade da roupa: ");
        let cor = prompt("Digite a quantidade da roupa: ");

        const roupa = new Roupa(tipo, quantidade, cor);
        this.#roupas.push(roupa);

    }





}

class Mulher extends Paciente {
    #olho = "";
    #cabelo = "";
    #roupas = [];

    constructor(altura, peso, corOlho, corCabelo, tamanhoCabelo, tipoCabelo, nome) {
        super(altura, peso, nome);
        this.#olho = new Olho(corOlho);
        this.#cabelo = new Cabelo(corCabelo, tamanhoCabelo, tipoCabelo);

    }

    get olho() {
        return this.olho;
    }

    set olho(olho) {
        this.olho = olho;
    }

    get cabelo() {
        return this.cabelo;
    }

    set cabelo(cabelo) {
        this.cabelo = cabelo;
    }

    listarRoupas() {
        for (let i = 0; i < this.roupas.length; i++) {
            console.log(this.#roupas[i]);
        }
    }

    adicionarRoupas() {
        let tipo = prompt("Digite o tipo da roupa: ");
        let quantidade = prompt("Digite a quantidade da roupa: ");
        let cor = prompt("Digite a quantidade da roupa: ");

        const roupa = new Roupa(tipo, quantidade, cor);
        this.#roupas.push(roupa);

    }


}