var tipoArr = ['water', 'normal', 'fire', 'electric', 'grass', 'bug', 'flying', 'fighting', 'ice', 'rock', 'poison', 'psychic',
    'ghost', 'dragon', 'dark', 'steel', 'ground', 'fairy'
];
var spanTipos = [`<span style="background: #6890F0; border-style: solid none; border-width: 1px; border-top-color: #98D8D8; border-bottom-color: #807870; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Water</span></span>`,
    `<span style="background: #A8A878; border-style: solid none; border-width: 1px; border-top-color: #D8D8D0; border-bottom-color: #705848; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Normal</span></span>`,
    `<span style="background: #F08030; border-style: solid none; border-width: 1px; border-top-color: #F8D030; border-bottom-color: #C03028; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Fire</span></span>`,
    `<span style="background: #F8D030; border-style: solid none; border-width: 1px; border-top-color: #F8F878; border-bottom-color: #B8A038; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Electric</span></span>`,
    `<span style="background: #78C850; border-style: solid none; border-width: 1px; border-top-color: #C0F860; border-bottom-color: #588040; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Grass</span></span>`,
    `<span style="background: #A8B820; border-style: solid none; border-width: 1px; border-top-color: #D8E030; border-bottom-color: #A8B820; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Bug</span></span>`,
    `<span style="background: #A890F0; border-style: solid none; border-width: 1px; border-top-color: #C8C0F8; border-bottom-color: #705898; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Flying</span></span>`,
    `<span style="background: #C03028; border-style: solid none; border-width: 1px; border-top-color: #F08030; border-bottom-color: #484038; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Fighting</span></span>`,
    `<span style="background: #98D8D8; border-style: solid none; border-width: 1px; border-top-color: #D0F8E8; border-bottom-color: #9090A0; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Ice</span></span>`,
    `<span style="background: #B8A038; border-style: solid none; border-width: 1px; border-top-color: #E0C068; border-bottom-color: #886830; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Rock</span></span>`,
    `<span style="background: #A040A0; border-style: solid none; border-width: 1px; border-top-color: #D880B8; border-bottom-color: #483850; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Poison</span></span>`,
    `<span style="background: #F85888; border-style: solid none; border-width: 1px; border-top-color: #F8C0B0; border-bottom-color: #789010; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Psychic</span></span>`,
    `<span style="background: #705898; border-style: solid none; border-width: 1px; border-top-color: #A890F0; border-bottom-color: #483850; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Ghost</span></span>`,
    `<span style="background: #7038F8; border-style: solid none; border-width: 1px; border-top-color: #B8A0F8; border-bottom-color: #483890; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Dragon</span></span>`,
    `<span style="background: #705848; border-style: solid none; border-width: 1px; border-top-color: #A8A878; border-bottom-color: #484038; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Dark</span></span>`,
    `<span style="background: #B8B8D0; border-style: solid none; border-width: 1px; border-top-color: #D8D8C0; border-bottom-color: #807870; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Steel</span></span>`,
    `<span style="background: #E0C068; border-style: solid none; border-width: 1px; border-top-color: #F8F878; border-bottom-color: #886830; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Ground</span></span>`,
    `<span style="background: #F0B6BC; border-style: solid none; border-width: 1px; border-top-color: #F5CAD1; border-bottom-color: #905F63; border-radius: 5px; padding: 0.15em; font-size: 8pt; color: #F8F8F8; text-shadow: 0px 1px 1px #807870;"><span style="color: #F8F8F8;">Fairy</span></span>`
]

function receberPesquisa() {
    var pesquisa = document.getElementById('pesquisa').value;
    pesquisa = pesquisa.toLowerCase();
    infoPokemons(pesquisa);
}

function receberDescricao1(h1, hb1) {
    var skill1, skill2;
    axios.get(`https://pokeapi.co/api/v2/ability/${hb1}/`)
        .then(function(resposta) {
            var cont = 0;
            while (resposta.data.effect_entries[cont].language.name != 'en') {
                cont++
            }
            skill1 = resposta.data.effect_entries[cont].effect
            document.querySelector('#primeiraHabilidade').innerHTML = `1# ${h1}: ${skill1}`
            document.querySelector('#segundaHabilidade').innerHTML = `2# Don't have second abilitie`
        })
        .catch(function(erro) {
            console.log(erro)
        })
}

function receberDescricao2(h1, h2, hb1, hb2) {
    var skill1, skill2;
    axios.get(`https://pokeapi.co/api/v2/ability/${hb1}/`)
        .then(function(resposta) {
            var cont = 0;
            while (resposta.data.effect_entries[cont].language.name != 'en') {
                cont++
            }
            skill1 = resposta.data.effect_entries[cont].effect
            document.querySelector('#primeiraHabilidade').innerHTML = `1# ${h1}: ${skill1}`
        })
        .catch(function(erro) {
            console.log(erro)
        })

    axios.get(`https://pokeapi.co/api/v2/ability/${hb2}/`)
        .then(function(resposta) {
            var cont = 0;
            while (resposta.data.effect_entries[cont].language.name != 'en') {
                cont++
            }
            skill2 = resposta.data.effect_entries[cont].effect
            document.querySelector('#segundaHabilidade').innerText = `2# ${h2}: ${skill2}`
        })
        .catch(function(erro) {
            console.log(erro)
        })
}

function forteContra1(pos1) {
    var tipo1 = tipoArr[pos1]
    var dobroDeDano = '';
    var metadeDeDano = '';
    var semDano = '';

    axios.get(`https://pokeapi.co/api/v2/type/${tipo1}/`)
        .then(function(resposta) {
            var contaDobro, contaMetade, contaSemDano;
            if (resposta.data.damage_relations.double_damage_to != '') {
                contaDobro = resposta.data.damage_relations.double_damage_to.length;
            }
            if (resposta.data.damage_relations.half_damage_to != '') {
                contaMetade = resposta.data.damage_relations.half_damage_to.length;
            }
            if (resposta.data.damage_relations.no_damage_to != '') {
                contaSemDano = resposta.data.damage_relations.no_damage_to.length;
            }
            for (var i = 0; i < contaDobro; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.double_damage_to[i].name);
                dobroDeDano += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaMetade; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.half_damage_to[i].name);
                metadeDeDano += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaSemDano; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.no_damage_to[i].name);
                semDano += ' ' + spanTipos[nome];
            }

            document.querySelector('#strong').innerHTML = `<p>Type #1: ${spanTipos[pos1]} <br>2x: ${dobroDeDano}<br> 0.5x: ${metadeDeDano}<br>0x: ${semDano}<p>`
            document.getElementById('#weakDiv').classList.remove('overflow');
        })
        .catch(function(erro) {
            console.log(erro)
        })
}

function forteContra2(pos1, pos2) {
    var tipo1 = tipoArr[pos1]
    var tipo2 = tipoArr[pos2]
    var dobroDeDano = '';
    var metadeDeDano = '';
    var semDano = '';
    var dobroDeDano2 = '';
    var metadeDeDano2 = '';
    var semDano2 = '';

    axios.get(`https://pokeapi.co/api/v2/type/${tipo1}/`)
        .then(function(resposta) {
            var contaDobro, contaMetade, contaSemDano;
            if (resposta.data.damage_relations.double_damage_to != '') {
                contaDobro = resposta.data.damage_relations.double_damage_to.length;
            }
            if (resposta.data.damage_relations.half_damage_to != '') {
                contaMetade = resposta.data.damage_relations.half_damage_to.length;
            }
            if (resposta.data.damage_relations.no_damage_to != '') {
                contaSemDano = resposta.data.damage_relations.no_damage_to.length;
            }
            for (var i = 0; i < contaDobro; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.double_damage_to[i].name);
                dobroDeDano += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaMetade; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.half_damage_to[i].name);
                metadeDeDano += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaSemDano; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.no_damage_to[i].name);
                semDano += ' ' + spanTipos[nome];
            }
        })
        .catch(function(erro) {
            console.log(erro)
        })

    axios.get(`https://pokeapi.co/api/v2/type/${tipo2}/`)
        .then(function(resposta) {
            var contaDobro, contaMetade, contaSemDano;
            if (resposta.data.damage_relations.double_damage_to != '') {
                contaDobro = resposta.data.damage_relations.double_damage_to.length;
            }
            if (resposta.data.damage_relations.half_damage_to != '') {
                contaMetade = resposta.data.damage_relations.half_damage_to.length;
            }
            if (resposta.data.damage_relations.no_damage_to != '') {
                contaSemDano = resposta.data.damage_relations.no_damage_to.length;
            }
            for (var i = 0; i < contaDobro; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.double_damage_to[i].name);
                dobroDeDano2 += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaMetade; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.half_damage_to[i].name);
                metadeDeDano2 += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaSemDano; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.no_damage_to[i].name);
                semDano2 += ' ' + spanTipos[nome];
            }
            document.querySelector('#strong').innerHTML = `<p>Type #1: ${spanTipos[pos1]} <br>2x: ${dobroDeDano}<br> 0.5x: ${metadeDeDano}<br>0x: ${semDano}
            <hr> Type #2: ${spanTipos[pos2]} <br>2x: ${dobroDeDano2}<br> 0.5x: ${metadeDeDano2}<br>0x: ${semDano2}</p>`
        })
        .catch(function(erro) {
            console.log(erro)
        })
}

function fracoContra1(pos1) {
    var tipo1 = tipoArr[pos1]
    var dobroDeDano = '';
    var metadeDeDano = '';
    var semDano = '';
    axios.get(`https://pokeapi.co/api/v2/type/${tipo1}/`)
        .then(function(resposta) {
            var contaDobro, contaMetade, contaSemDano;
            if (resposta.data.damage_relations.double_damage_from != '') {
                contaDobro = resposta.data.damage_relations.double_damage_from.length;
            }
            if (resposta.data.damage_relations.half_damage_from != '') {
                contaMetade = resposta.data.damage_relations.half_damage_from.length;
            }
            if (resposta.data.damage_relations.no_damage_from != '') {
                contaSemDano = resposta.data.damage_relations.no_damage_from.length;
            }
            for (var i = 0; i < contaDobro; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.double_damage_from[i].name);
                dobroDeDano += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaMetade; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.half_damage_from[i].name);
                metadeDeDano += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaSemDano; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.no_damage_from[i].name);
                semDano += ' ' + spanTipos[nome];
            }
            document.querySelector('#weak').innerHTML = `<p>2x: ${dobroDeDano}<br> 0.5x: ${metadeDeDano}<br>0x: ${semDano}</p>`
        })
        .catch(function(erro) {
            console.log(erro)
        })
}

function fracoContra2(pos1, pos2) {
    var tipo1 = tipoArr[pos1]
    var tipo2 = tipoArr[pos2]
    var dobroDeDano = '';
    var metadeDeDano = '';
    var semDano = '';
    var dobroDeDano2 = '';
    var metadeDeDano2 = '';
    var semDano2 = '';
    axios.get(`https://pokeapi.co/api/v2/type/${tipo1}/`)
        .then(function(resposta) {
            var contaDobro, contaMetade, contaSemDano;
            if (resposta.data.damage_relations.double_damage_from != '') {
                contaDobro = resposta.data.damage_relations.double_damage_from.length;
            }
            if (resposta.data.damage_relations.half_damage_from != '') {
                contaMetade = resposta.data.damage_relations.half_damage_from.length;
            }
            if (resposta.data.damage_relations.no_damage_from != '') {
                contaSemDano = resposta.data.damage_relations.no_damage_from.length;
            }
            for (var i = 0; i < contaDobro; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.double_damage_from[i].name);
                dobroDeDano += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaMetade; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.half_damage_from[i].name);
                metadeDeDano += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaSemDano; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.no_damage_from[i].name);
                semDano += ' ' + spanTipos[nome];
            }

        })
        .catch(function(erro) {
            console.log(erro)
        })
    axios.get(`https://pokeapi.co/api/v2/type/${tipo2}/`)
        .then(function(resposta) {
            var contaDobro, contaMetade, contaSemDano;
            if (resposta.data.damage_relations.double_damage_from != '') {
                contaDobro = resposta.data.damage_relations.double_damage_from.length;
            }
            if (resposta.data.damage_relations.half_damage_from != '') {
                contaMetade = resposta.data.damage_relations.half_damage_from.length;
            }
            if (resposta.data.damage_relations.no_damage_from != '') {
                contaSemDano = resposta.data.damage_relations.no_damage_from.length;
            }
            for (var i = 0; i < contaDobro; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.double_damage_from[i].name);
                dobroDeDano2 += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaMetade; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.half_damage_from[i].name);
                metadeDeDano2 += ' ' + spanTipos[nome];
            }
            for (var i = 0; i < contaSemDano; i++) {
                var nome = tipoArr.indexOf(resposta.data.damage_relations.no_damage_from[i].name);
                semDano2 += ' ' + spanTipos[nome];
            }
            document.querySelector('#weak').innerHTML = `<p>Type #1: ${spanTipos[pos1]} <br>2x: ${dobroDeDano}<br> 0.5x: ${metadeDeDano}<br>0x: ${semDano}
            <hr> Type #2: ${spanTipos[pos2]} <br>2x: ${dobroDeDano2}<br> 0.5x: ${metadeDeDano2}<br>0x: ${semDano2}</p>`
        })
        .catch(function(erro) {
            console.log(erro)
        })
}

function infoPokemons(pesquisa) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`)
        .then((resposta) => {
            var nome = resposta.data.name;
            nome = nome.charAt(0).toUpperCase() + nome.slice(1);
            var numero = 0;

            //Achar Imagem no Banco do Pokemon Oficial
            if (resposta.data.id < 10) {
                document.querySelector('#imagemPokemon').innerHTML = `<img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${resposta.data.id}.png' style='height: auto; width: 110px; margin-left: 2px ''>`;
                numero = `00` + resposta.data.id;

            } else if (resposta.data.id < 100) {
                document.querySelector('#imagemPokemon').innerHTML = `<img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${resposta.data.id}.png' style='height: auto; width: 110px; margin-left: 2px ''>`;
                numero = `0` + resposta.data.id;

            } else {
                document.querySelector('#imagemPokemon').innerHTML = `<img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/${resposta.data.id}.png' style='height: auto; width: 110px; margin-left: 2px ''>`;
                numero = resposta.data.id;
            }

            var tipos = [];
            //IMPRIMIR NA TELA
            if (resposta.data.types[1] != null) {
                var pos1 = tipoArr.indexOf(resposta.data.types[0].type.name);
                var pos2 = tipoArr.indexOf(resposta.data.types[1].type.name);
                tipos[0] = spanTipos[pos1];
                tipos[1] = spanTipos[pos2];
                forteContra2(pos1, pos2);
                fracoContra2(pos1, pos2)
                document.querySelector('#pokeInfos').innerHTML = `<p class="numeropokemons">Nº${numero}<br>${nome}<br>${tipos[0]}  ${tipos[1]}</p>`
            } else {
                pos1 = tipoArr.indexOf(resposta.data.types[0].type.name);
                tipos[0] = spanTipos[pos1];
                forteContra1(pos1);
                fracoContra1(pos1)
                document.querySelector('#pokeInfos').innerHTML = `<p class="numeropokemons">Nº${numero}<br>${nome}<br>${tipos[0]}</p>`
            }
            var habilidade1;
            var habilidade2;

            if (resposta.data.abilities[1] != null) {
                habilidade1 = resposta.data.abilities[0].ability.name
                habilidade1 = habilidade1.charAt(0).toUpperCase() + habilidade1.slice(1);
                descricao1 = resposta.data.abilities[0].ability.url.split('/')
                descricao1 = descricao1[6];
                habilidade2 = resposta.data.abilities[1].ability.name
                habilidade2 = habilidade2.charAt(0).toUpperCase() + habilidade2.slice(1);
                descricao2 = resposta.data.abilities[1].ability.url.split('/')
                descricao2 = descricao2[6];
                receberDescricao2(habilidade1, habilidade2, descricao1, descricao2);

            } else {
                habilidade1 = resposta.data.abilities[0].ability.name
                habilidade1 = habilidade1.charAt(0).toUpperCase() + habilidade1.slice(1);
                descricao1 = resposta.data.abilities[0].ability.url.split('/')
                descricao1 = descricao1[6];
                receberDescricao1(habilidade1, descricao1);
            }
        })
        .catch(function(erro) {
            console.log(erro)
        })
}