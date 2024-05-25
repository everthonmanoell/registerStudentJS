class Grao extends Produto {
    // Outros métodos e propriedades...

    exibirProduto() {
        console.log("Produto de Grão:");
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Validade: ${this.validade}`);
    }
}

class Limpeza extends Produto {
    // Outros métodos e propriedades...

    exibirProduto() {
        console.log("Produto de Limpeza:");
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Peso Liquido: ${this.pesoLiquido}`);
        console.log(`Validade: ${this.validade}`);
        console.log(`Fragrância: ${this.fragrancia}`);
    }
}

class Vesturario extends Produto {
    // Outros métodos e propriedades...

    exibirProduto() {
        console.log("Produto de Vestuário:");
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Tamanho: ${this.tamanho}`);
    }
}
