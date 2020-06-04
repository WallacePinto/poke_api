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

var nomePokemons = ['Charmander', 'Charmilion', 'Charizard', 'Chikorita', 'Caterpie', 'Casccon'];

autocomplete(document.getElementById("myInput"), nomePokemons);

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}
/*An array containing all the country names in the world:*/

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
function receberPesquisa() {
    var pesquisa = document.getElementById('myInput').value;
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
            document.querySelector('#weak').innerHTML = `<p>Type #1: ${spanTipos[pos1]} <br>2x: ${dobroDeDano}<br> 0.5x: ${metadeDeDano}<br>0x: ${semDano}</p>`
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