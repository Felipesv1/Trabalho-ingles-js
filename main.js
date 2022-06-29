//Crie 3 variáveis, cada uma com um array:
//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
// -title:
// -director:
// -year: 

            let Comedy = [
                {
                    title:"Gente Grande 2",
                    director:"Dennis Dugan",
                    year:2013
                },
                {
                    title:"Operação Supletivo - Agora Vai!",
                    director:"Malcolm D. lee",
                    year:2018
                },
                {
                    title:"Jumanji 2",
                    director:"Jake kasdan",
                    year:2019
                }
                    ]
                    console.log(Comedy);

            let action = [
                {
                    title:"Alerta Vermelho",
                    director:"Rawson Marshall thurber",
                    year:2021
                },
                {
                    title:"Jogador Nº 1",
                    director:"Steven spielberg",
                    year:2018
                },
                {
                    title:"O Projeto Adam",
                    director:"Shawn levy",
                    year:2022
                }
                    ]

                    console.log(action);

            let Fantasy = [
                {
                    title:"Homem-Aranha: Sem Volta para Casa",
                    director:"Jon watts",
                    year:2021
                },
                {
                    title:"Shang-chi e a Lenda dos Dez Anéis",
                    director:"Destin crestton",
                    year:2021
                },
                {
                    title:"Sonic: O Filme",
                    director:"Jef fowler",
                    year:2020
                }
                    ]       

                    console.log(Fantasy);


//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 

if(action[0].title == "Alerta Vermelho" ){
    console.log(`MY FAVORIT MOVIE IS ${action[0].title}`);
}else{
    console.log(`${action[0].title} NOT EVEN 5 STARS`)
}

