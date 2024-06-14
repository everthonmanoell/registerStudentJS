// Classe Pagina
class Pagina {
    #id = "";
    #name = "";
    #classe = "";
    static #elementos = [];

    constructor() {}

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get classe() {
        return this.#classe;
    }

    set classe(classe) {
        this.#classe = classe;
    }

    getElementsById(id) {
        if (Pagina.#elementos.length === 0) {
            console.log("Nenhum elemento foi adicionado.");
            return null;
        }

        for (let i = 0; i < Pagina.#elementos.length; i++) {
            if (Pagina.#elementos[i] === id) {
                return Pagina.#elementos[i];
            }
        }

        return null;
    }

    set elementos(elemento) {
        Pagina.#elementos.push(elemento);
    }

    get elementos() {
        return Pagina.#elementos;
    }
}

// Classe Body
class Body extends Pagina {
    #componentes = [];

    constructor() {
        super();
    }

    getElementsById(id) {
        if (this.#componentes.length === 0) {
            console.log("Nenhum elemento foi adicionado.");
            return null;
        }

        for (let i = 0; i < this.#componentes.length; i++) {
            if (this.#componentes[i] === id) {
                return this.#componentes[i];
            }
        }

        return null;
    }

    set componentes(componente) {
        this.#componentes.push(componente);
    }

    get componentes() {
        return this.#componentes;
    }
}

// Classe Head
class Head extends Pagina {
    #title = "";
    #charSet = "";
    #lang = "";

    constructor(title, charSet, lang) {
        super();
        this.#title = title;
        this.#charSet = charSet;
        this.#lang = lang;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        this.#title = title;
    }

    get charSet() {
        return this.#charSet;
    }

    set charSet(charSet) {
        this.#charSet = charSet;
    }

    get lang() {
        return this.#lang;
    }

    set lang(lang) {
        this.#lang = lang;
    }

    toHTML() {
        return `
            <head>
                <title>${this.#title}</title>
                <meta charset="${this.#charSet}">
            </head>
        `;
    }
}

// Classe P
class P extends Body {
    #formatos = [];
    #conteudo = "";

    constructor(conteudo = "") {
        super();
        this.#conteudo = conteudo;
    }

    get conteudo() {
        return this.#conteudo;
    }

    set conteudo(conteudo) {
        this.#conteudo = conteudo;
    }

    getElementsById(id) {
        if (this.#formatos.length === 0) {
            console.log("Nenhum elemento foi adicionado.");
            return null;
        }

        for (let i = 0; i < this.#formatos.length; i++) {
            if (this.#formatos[i] === id) {
                return this.#formatos[i];
            }
        }

        return null;
    }

    set formatos(formato) {
        this.#formatos.push(formato);
    }

    toHTML() {
        return `<p>${this.#conteudo}</p>`;
    }
}

// Classe H1
class H1 extends Body {
    #texto;

    constructor(texto) {
        super();
        this.#texto = texto;
    }

    get texto() {
        return this.#texto;
    }

    set texto(texto) {
        this.#texto = texto;
    }

    toHTML() {
        return `<h1>${this.#texto}</h1>`;
    }
}

// Classe Img
class Img extends Body {
    #src = "";

    constructor(src = "") {
        super();
        this.#src = src;
    }

    get src() {
        return this.#src;
    }

    set src(src) {
        this.#src = src;
    }

    toHTML() {
        return `<img src="${this.#src}" alt="">`;
    }
}

// Classe OL
class OL extends Body {
    #itens = [];

    constructor(itens = []) {
        super();
        this.#itens = itens;
    }

    getElementsById(id) {
        if (this.#itens.length === 0) {
            console.log("Nenhum elemento foi adicionado.");
            return null;
        }

        for (let i = 0; i < this.#itens.length; i++) {
            if (this.#itens[i] === id) {
                return this.#itens[i];
            }
        }

        return null;
    }

    set itens(item) {
        this.#itens.push(item);
    }

    get itens() {
        return this.#itens;
    }

    toHTML() {
        const itemsHTML = this.#itens.map(item => `<li>${item}</li>`).join("");
        return `<ol>${itemsHTML}</ol>`;
    }
}

// Classe LI
class LI extends OL {
    #conteudo = "";

    constructor(conteudo = "") {
        super();
        this.#conteudo = conteudo;
    }

    get conteudo() {
        return this.#conteudo;
    }

    set conteudo(conteudo) {
        this.#conteudo = conteudo;
    }

    toHTML() {
        return `<li>${this.#conteudo}</li>`;
    }
}

// Classe Strong
class Strong extends P {
    constructor(conteudo = "") {
        super(conteudo);
    }

    toHTML() {
        return `<strong>${this.conteudo}</strong>`;
    }
}

// Classe Em
class Em extends P {
    constructor(conteudo = "") {
        super(conteudo);
    }

    toHTML() {
        return `<em>${this.conteudo}</em>`;
    }
}

// Classe Default
class Default extends P {
    #conteudo = '';

    get conteudo(){
        return this.#conteudo;
    }

    set conteudo(conteudo){
        this.#conteudo = conteudo;
    }

    constructor(conteudo = "") {
        super(conteudo);
    }

    toHTML() {
        return super.toHTML();
    }
}

// Classe A
class A extends P {
    #href = "";

    constructor(conteudo = "", href = "") {
        super(conteudo);
        this.#href = href;
    }

    get href() {
        return this.#href;
    }

    set href(href) {
        this.#href = href;
    }

    toHTML() {
        return `<a href="${this.#href}">${this.conteudo}</a>`;
    }
}

// Classe principal para gerenciar o menu
class Application {
    constructor() {
        this.page = null;
        this.head = null;
        this.body = new Body();
    }

    criarPagina() {
        this.page = new Pagina();
        console.log("Página criada.");
    }

    atualizarHead(title, charSet, lang) {
        if (this.page) {
            this.head = new Head(title, charSet, lang);
            console.log("Head atualizado.");
        } else {
            console.log("Crie uma página primeiro.");
        }
    }

    adicionarH1(texto) {
        if (this.page) {
            const h1 = new H1(texto);
            this.body.componentes = h1;
            console.log("H1 adicionado.");
        } else {
            console.log("Crie uma página primeiro.");
        }
    }

    adicionarParagrafo(opcao) {
        if (this.page) {
            let paragrafo;
            switch (opcao) {
                case 1:
                    paragrafo = new Default(prompt("Digite o conteúdo do parágrafo:"));
                    break;
                case 2:
                    paragrafo = new Strong(prompt("Digite o conteúdo do texto em negrito:"));
                    break;
                case 3:
                    paragrafo = new Em(prompt("Digite o conteúdo do texto em itálico:"));
                    break;
                case 4:
                    const texto = prompt("Digite o conteúdo do link:");
                    const href = prompt("Digite o href do link:");
                    paragrafo = new A(texto, href);
                    break;
                default:
                    console.log("Opção inválida.");
                    return;
            }
            this.body.componentes = paragrafo;
            console.log("Parágrafo adicionado.");
        } else {
            console.log("Crie uma página primeiro.");
        }
    }

    adicionarImagem(src) {
        if (this.page) {
            const img = new Img(src);
            this.body.componentes = img;
            console.log("Imagem adicionada.");
        } else {
            console.log("Crie uma página primeiro.");
        }
    }

    adicionarOL(itens) {
        if (this.page) {
            const ol = new OL(itens);
            this.body.componentes = ol;
            console.log("OL adicionado.");
        } else {
            console.log("Crie uma página primeiro.");
        }
    }

    gerarScript() {
        if (this.page && this.head) {
            const headHTML = this.head.toHTML();
            const bodyHTML = this.body.componentes.map(component => component.toHTML()).join("\n");
            const pageHTML = `
                <!DOCTYPE html>
                <html lang="${this.head.lang}">
                    ${headHTML}
                    <body>
                        ${bodyHTML}
                    </body>
                </html>
            `;
            console.log("HTML gerado:");
            console.log(pageHTML);
        } else {
            console.log("Crie uma página e atualize o head primeiro.");
        }
    }

    showMenu() {
        console.log(`
            Menu:
            1 - Criar Página
            2 - Atualizar head
            3 - Inserir H1
            4 - Inserir Parágrafo
                1 - Texto padrão
                2 - Texto em negrito
                3 - Texto em itálico
                4 - Link
            5 - Inserir Imagem
            6 - Inserir Lista
            7 - Gerar Script da Página
            8 - Sair
        `);
    }

    executeOption(option) {
        switch (option) {
            case 1:
                this.criarPagina();
                break;
            case 2:
                const title = prompt("Digite o título da página:");
                const charSet = prompt("Digite o charset da página:");
                const lang = prompt("Digite o idioma da página:");
                this.atualizarHead(title, charSet, lang);
                break;
            case 3:
                const h1Text = prompt("Digite o texto do H1:");
                this.adicionarH1(h1Text);
                break;
            case 4:
                console.log(`
                Sub-Menu:
                1 - Texto padrão
                2 - Texto em negrito
                3 - Texto em itálico
                4 - Link
                `);
                const subOption = parseInt(prompt("Digite sua opção:"));
                this.adicionarParagrafo(subOption);
                break;
            case 5:
                const src = prompt("Digite o src da imagem:");
                this.adicionarImagem(src);
                break;
            case 6:
                const itens = prompt("Digite os itens da OL, separados por vírgula:").split(",");
                this.adicionarOL(itens);
                break;
            case 7:
                this.gerarScript();
                break;
            case 8:
                console.log("Saindo...");
                return false;
            default:
                console.log("Opção inválida.");
        }
        return true;
    }
}

// Uso da aplicação
const app = new Application();
let keepRunning = true;

while (keepRunning) {
    app.showMenu();
    const option = parseInt(prompt("Digite sua opção:"));
    keepRunning = app.executeOption(option);
}
