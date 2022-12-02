export default class Candidato {
    constructor(nome, legenda, numero, imagem) {
        this.nome = nome;
        this.legenda = legenda;
        this.numero = numero;
        this.imagem = imagem;
    }

    get candidato_nome(){
        return this.nome
    }

    get candidato_legenda(){
        return this.legenda
    }

    get candidato_numero(){
        return this.numero
    }

    get candidato_imagem(){
        return this.imagem
    }
}

window.App = new Candidato()