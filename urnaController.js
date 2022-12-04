import Candidato from "./candidato.js";

class urnaController {
    constructor() {
        // identificar ações (números e enviar) no teclado da urna
        this.teclado_numerico = document.querySelectorAll('.botao-numerico');
        this.teclado_de_actions = document.querySelectorAll('.botoes-enviar');

        // identificar os visores (telas)
        this.visorEL = document.getElementById('antes-voto');
        this.visorEL_voto_branco = document.getElementById('voto-branco');

        // visores dos candidatos
        this.tela_candidato = document.getElementById('tela-candidato')
        this.tela_presidente_rick = document.getElementById('presidente-rick')
        this.tela_presidente_morty = document.getElementById('presidente-morty')
        this.tela_presidente_jerry = document.getElementById('presidente-jerry')
        this.tela_presidente_evil_morty = document.getElementById('presidente-evil-morty')
        this.tela_presidente_conselho = document.getElementById('presidente-conselho-rick')
        this.nao_encontrado = document.getElementById('nao-encontrado')
        this.tela_voto_confiramdo = document.getElementById('voto-confirmado')

        // identificador de qual dígito foi digitado na votação
        this.primeiro_numero = document.querySelector('.numero-presidente-primeiro-numero');
        this.segundo_numero = document.querySelector('.numero-presidente-segundo-numero');

        this.criar_candidatos();
        this.observador_teclado();
        this.observador_teclado_actions()
    }

    limpar_voto() {
        this.primeiro_numero.innerText = '';
        this.segundo_numero.innerText = '';
        console.log('Seu voto foi limpado.')
    }

    iniciar_processo(parametro) {
        if (parametro === 'BRANCO') {
            let confirmacao = confirm(`Está certo de que irá votar em ${parametro}`);

            if (confirmacao) {
                this.visorEL.style.display = 'none';
                this.tela_candidato.style.display = 'none'
                this.visorEL_voto_branco.style.display = 'block';

                setTimeout(() => {
                    this.visorEL.style.display = 'flex';
                    this.visorEL_voto_branco.style.display = 'none';
                }, 3000);
                this.limpar_voto();
            }
            console.log('O voto foi confirmado para BRANCO')
        }

        if (parametro === 'CORRIGIR') {
            this.tela_candidato.style.display = 'none'
            this.nao_encontrado.style.display = 'none'

            this.limpar_voto()

            this.visorEL.style.display = 'flex'
        }

        if (parametro === 'CONFIRMAR'){
            this.tela_voto_confiramdo.style.display = 'block'
        }

        if (typeof (parametro) === 'number') {
            let primeiro_numero = this.primeiro_numero;
            let segundo_numero = this.segundo_numero;
            console.log('Você clicou no número ' + parametro);

            if (primeiro_numero.innerText == '') {
                primeiro_numero.innerText = parametro;
            } else {
                segundo_numero.innerText = parametro;
                // let voto_completo = Object.assign({}, [this.primeiro_numero.innerText, this.segundo_numero.innerText]);
                var voto_completo = (primeiro_numero.innerText + segundo_numero.innerText);
                console.log('Seu voto é ' + voto_completo);
                // this.carregar_candidatos(voto_completo);
                this.carregar_candidatos(voto_completo);
            }
        }
    }

    // carregar_candidatos(parametro) {
    //     let voto_computado = null;
    //     let candidatos_existentes = this.buscar_candidatos();
    //     let candidato_votado = '';

    //     for (const key in parametro) {
    //         voto_computado += parametro[key]
    //     } 

    //     candidatos_existentes.map(candidato => {
    //         if (candidato.numero == voto_computado) {
    //             candidato_votado = candidato;
    //         }
    //     })

    //     this.tela_candidato.innerHTML = 'teste'

    //     this.visorEL.style.display = 'none'
    //     this.tela_candidato.style.display = 'block'
    // }

    carregar_candidatos(voto_completo) {
        if (voto_completo === '01') {
            this.visorEL.style.display = 'none';
            this.nao_encontrado.style.display = 'none'
            this.tela_candidato.style.display = 'block'
            this.tela_presidente_rick.style.display = 'flex'
            this.tela_presidente_morty.style.display = 'none'
            this.tela_presidente_jerry.style.display = 'none'
            this.tela_presidente_evil_morty.style.display = 'none'
            this.tela_presidente_conselho.style.display = 'none'
            console.log('Abrir tela de presidente do Rick C-137')
            this.limpar_voto()
        } else if (voto_completo === '42') {
            this.visorEL.style.display = 'none';
            this.nao_encontrado.style.display = 'none'
            this.tela_candidato.style.display = 'block';
            this.tela_presidente_rick.style.display = 'none'
            this.tela_presidente_morty.style.display = 'flex'
            this.tela_presidente_jerry.style.display = 'none'
            this.tela_presidente_evil_morty.style.display = 'none'
            this.tela_presidente_conselho.style.display = 'none'
            console.log('Abrir tela de presidente do Morty')
            this.limpar_voto()
        } else if (voto_completo === '09') {
            this.visorEL.style.display = 'none'
            this.nao_encontrado.style.display = 'none'
            this.tela_candidato.style.display = 'block'
            this.tela_presidente_rick.style.display = 'none'
            this.tela_presidente_morty.style.display = 'none'
            this.tela_presidente_jerry.style.display = 'flex'
            this.tela_presidente_evil_morty.style.display = 'none'
            this.tela_presidente_conselho.style.display = 'none'
            console.log('Abrir tela de presidente do Jerry')
            this.limpar_voto()
        } else if (voto_completo === '66') {
            this.visorEL.style.display = 'none'
            this.nao_encontrado.style.display = 'none'
            this.tela_candidato.style.display = 'block'
            this.tela_presidente_rick.style.display = 'none'
            this.tela_presidente_morty.style.display = 'none'
            this.tela_presidente_jerry.style.display = 'none'
            this.tela_presidente_evil_morty.style.display = 'flex'
            this.tela_presidente_conselho.style.display = 'none'
            console.log('Abrir tela de presidente do Evil Morty')
            this.limpar_voto()
        } else if (voto_completo === '99') {
            this.visorEL.style.display = 'none'
            this.nao_encontrado.style.display = 'none'
            this.tela_candidato.style.display = 'block'
            this.tela_presidente_rick.style.display = 'none'
            this.tela_presidente_morty.style.display = 'none'
            this.tela_presidente_jerry.style.display = 'none'
            this.tela_presidente_evil_morty.style.display = 'none'
            this.tela_presidente_conselho.style.display = 'flex'
            console.log('Abrir tela de presidente do Conselho Rick')
            this.limpar_voto()
        } else {
            this.visorEL.style.display = 'none'
            this.tela_candidato.style.display = 'none'
            this.tela_presidente_rick.style.display = 'none'
            this.tela_presidente_morty.style.display = 'none'
            this.tela_presidente_jerry.style.display = 'none'
            this.tela_presidente_evil_morty.style.display = 'none'
            this.tela_presidente_conselho.style.display = 'none'
            this.nao_encontrado.style.display = 'flex';

            setTimeout(() => {
                this.visorEL.style.display = 'flex';
                this.nao_encontrado.style.display = 'none';
            }, 3000);
            this.limpar_voto();
        }
    }

    observador_teclado() {
        this.teclado_numerico.forEach(botao => {
            botao.addEventListener('click', e => {
                let parametro_numerico = Number(e.target.innerText);
                this.iniciar_processo(parametro_numerico);
            })
        })
    }

    observador_teclado_actions() {
        this.teclado_de_actions.forEach(botao => {
            botao.addEventListener('click', e => {
                let parametro = (e.target.innerText);
                this.iniciar_processo(parametro)
            })
        })
    }

    criar_candidatos() {
        // criação dos candidatos da urna
        let candidatos = [
            new Candidato('Rick', 'alcolatra', '11', './images/rick-com-arma.png'),
            new Candidato('Morty', 'emocional', '12', 'diretória da image'),
            new Candidato('Jerry', 'bobo', '13', 'diretória da image'),
            new Candidato('Evil', 'malvado', '14', 'diretória da image'),
            new Candidato('Conselho', 'corrupto', '14', 'diretória da image'),
        ]

        // saída dos candidatos no console
        console.log('Os candidatos para presidente são: ')
        console.log(candidatos);

        localStorage.setItem('candidatos', JSON.stringify(candidatos));
    }

    buscar_candidatos() {
        let candidatos_buscado = JSON.parse(localStorage.getItem('candidatos'));

        return candidatos_buscado
    }
}

window.App = new urnaController()
