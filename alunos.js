class Aplicacao {
    #login = '';
    #senha = '';
    alunos = [];

    executar() {
        console.log("Bem vindo ao sistema de gerenciamento de alunos");
        this.#login = prompt('Digite o login: ');
        this.#senha = prompt('Digite a senha: ');
        
        let objAluno = this.verificarLoginSistema(this.#login, this.#senha);
        
        if (this.#login === 'adm' && this.#senha === '123') {
            console.log("Usuário correto! Entrou no sistema!\n");
            this.menu();
           
        } else if(objAluno != null){
            console.log("Usuário correto! Entrou no sistema!\n");
            this.menuAluno(objAluno);
        }else{
            console.log("Usuário ou senha incorretos. Tente novamente!");
        }
    }

    //--------------------------------------------------------------------------------

    menu() {
        let op;
        console.log("Bem-vindo ao sistema, administrador! ");
        do {

            console.log(" \n");
            console.log("1. Cadastrar Aluno");
            console.log("2. Listar alunos");
            console.log("3. Buscar aluno");
            console.log("4. Atualizar aluno");
            console.log("5. Atualizar media do aluno");
            console.log("6. Excluir aluno");
            console.log("0. Sair do sistema");
            op = prompt("Digite sua opção: ");

            switch (parseInt(op)) {
                case 1:
                    this.cadastrarAluno();
                    break;
                case 2:
                    this.listarAlunos();
                    break;
                case 3:
                    this.buscarAluno();
                    break;
                case 4:
                    let matricula = prompt("Digite a matrícula do aluno que deseja atualizar: ");
                    this.atualizarAluno(parseInt(matricula));
                    break;

                case 5:
                    let matricula1 = prompt("Digite a matrícula do aluno que deseja atualizar a média: ");
                    this.atualizarMediaAluno(parseInt(matricula1));
                    break;
                case 6:
                    let matricula2 = prompt("Digite a matrícula do aluno que deseja excluir: ");
                    this.excluirAluno(parseInt(matricula2));
                    break;
                case 0:
                    console.log("Saindo do sistema...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (parseInt(op) !== 0);
    }

    menuAluno(aluno) {
        let op;
        console.log(`Bem-vindo ao sistema, ${aluno.nome}!` );
        do {

            console.log(" \n");
            console.log("1. Alterar Nome");
            console.log("2. Alterar Login");
            console.log("3. Alterar Senha");
            console.log("4. Alterar Sexo");
            console.log("0. Sair do sistema");

            op = prompt("Digite sua opção: ");

            switch (parseInt(op)) {
                case 1:
                    this.alterarNome(aluno.matricula);
                    break;
                case 2:
                    this.alterarLogin(aluno.matricula);
                    break;
                case 3:
                    this.alterarSenha(aluno.matricula);
                    break;
                case 4:
                    this.alterarSexo(aluno.matricula);
                    break;


                case 0:
                    console.log("Saindo do sistema...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (parseInt(op) !== 0);
    }
    //------------------------------------------------------------------------------

    cadastrarAluno() {
        let nome = prompt("Digite o nome: ");
        let login = prompt("Digite o Login: ");
        let senha = prompt("Digite a senha: ");
        let idade = prompt("Digite a idade: ");
        let sexo = prompt("Digite o sexo: ");

        if(this.verificarLoginExistente(login)){
            console.log("Login já existente, tente outro");
            return;
        }

        const aluno = new Aluno(nome, login, senha, parseInt(idade), sexo);
        this.alunos.push(aluno);
    }

    listarAlunos() {
        if (this.alunos.length === 0) {
            console.log("Nenhum aluno cadastrado.");
        } else {
            this.alunos.forEach(aluno => {
                console.log(`Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}, Idade: ${aluno.idade}, Sexo: ${aluno.sexo}`);
            });
        }
    }

    buscarAluno() {
        let nome = prompt("Digite o nome do aluno que deseja buscar: ");
        for (let aluno of this.alunos) {
            if (aluno.nome === nome) {
                console.log(`Matrícula: ${aluno.matricula}`);
                console.log(`Nome: ${aluno.nome}`);
                console.log(`Idade: ${aluno.idade}`);
                console.log(`Sexo: ${aluno.sexo}`);
                console.log(`Média: ${aluno.media}`);
                return aluno;
            }
        }
        console.log("Aluno não encontrado");
        return null;
    }

    atualizarAluno(matricula) {
        let aluno = this.alunos.find(aluno => aluno.matricula === matricula);
        if (!aluno) {
            console.log("Aluno não encontrado.");
            return;
        }

        console.log(`Atualizando informações do aluno: ${aluno.nome}`);
        aluno.nome = prompt("Digite o novo nome: ");
        aluno.login = prompt("Digite o novo login: ");
        aluno.senha = prompt("Digite a nova senha: ");
        aluno.idade = parseInt(prompt("Digite a nova idade: "));
        aluno.sexo = prompt("Digite o novo sexo: ");

        console.log("Informações do aluno atualizadas com sucesso.");
    }

    atualizarMediaAluno(matricula) {
        let aluno = this.alunos.find(aluno => aluno.matricula === matricula);
        if (!aluno) {
            console.log("Aluno não encontrado.");
            return;
        }

        console.log(`Atualizando média do aluno: ${aluno.nome}`);
        aluno.media = parseFloat(prompt("Digite a nova média: ")) || aluno.media;

        console.log("Média do aluno atualizada com sucesso.");
    }

    excluirAluno(matricula) {
        let index = this.alunos.findIndex(aluno => aluno.matricula === matricula);
        if (index === -1) {
            console.log("Aluno não encontrado.");
            return;
        }

        this.alunos.splice(index, 1);
        console.log("Aluno removido com sucesso.");
    }





    //------ Parte do aluno -----

    // ---- Verificações ----

    verificarLoginExistente(login) {
        if(this.alunos.find(aluno => aluno.login === login)){
            return 1;
        }
        return 0;

    }

    verificarLoginSistema(login, senha) {
        return this.alunos.find(aluno => aluno.login === login && aluno.senha === senha);
    
    }


    verificarLoginDuplicata(aluno) {
        return this.alunos.find(outroAluno => outroAluno.login === aluno.login && outroAluno.matricula !== aluno.matricula);
    }

    
      
    //-------------------------
    //--- Metódos de alteração do aluno ----

    alterarNome(matricula) {
        let aluno = this.alunos.find(aluno => aluno.matricula === matricula);
        if (!aluno) {
            console.log("Aluno não encontrado.");
            return;
        }
        aluno.nome = prompt("Digite o novo nome: ");
    }

    alterarLogin(matricula) {
        let aluno = this.alunos.find(aluno => aluno.matricula === matricula);
        if (!aluno) {
            console.log("Aluno não encontrado.");
            return;
        }else if(this.verificarLoginDuplicata(aluno)){
            console.log("Login já existente, tente outro");
            return;
        }
        aluno.login = prompt("Digite o novo login: ");

    }

    alterarSenha(matricula) {
        let aluno = this.alunos.find(aluno => aluno.matricula === matricula);
        if (!aluno) {
            console.log("Aluno não encontrado.");
            return;
        }
        aluno.senha = prompt("Digite a nova senha: ");
    }

    alterarSexo(matricula) {
        let aluno = this.alunos.find(aluno => aluno.matricula === matricula);
        if (!aluno) {
            console.log("Aluno não encontrado.");
            return;
        }
        aluno.sexo = prompt("Digite o novo sexo: ");
    }


}

//Classe Aluno

class Aluno {
    static matriculaAtual = 5000;
    #matricula;
    #nome = '';
    #login = '';
    #senha = '';
    #idade = 0;
    #sexo = '';
    #media = 0;

    constructor(nome, login, senha, idade, sexo) {
        this.#nome = nome;
        this.#login = login;
        this.#senha = senha;
        this.#idade = idade;
        this.#sexo = sexo;
        this.#matricula = Aluno.matriculaAtual++;
    }

    // Getters e Setters para propriedades privadas
    set nome(nome) {
        this.#nome = nome;
    }

    get nome() {
        return this.#nome;
    }

    set login(login) {
        this.#login = login;
    }

    get login() {
        return this.#login;
    }

    set senha(senha) {
        this.#senha = senha;
    }

    get senha() {
        return this.#senha;
    }

    set idade(idade) {
        this.#idade = idade;
    }

    get idade() {
        return this.#idade;
    }

    set sexo(sexo) {
        this.#sexo = sexo;
    }

    get sexo() {
        return this.#sexo;
    }

    get matricula() {
        return this.#matricula;
    }

    set media(media) {
        this.#media = media;
    }

    get media() {
        return this.#media;
    }
}

// Execução do sistema / Main
const app = new Aplicacao();

while(true){
    app.executar();
}
