//Crie 3 variáveis, cada uma com um array:
//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
// -title:
// -director:
// -year: 

            let Comedy = [
                {
                    title:"Great  people",
                    director:"Dennis Dugan",
                    year:2013
                },
                {
                    title:"Operation Supplementary - Now Go!",
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
                    title:"Red alert",
                    director:"Rawson Marshall thurber",
                    year:2021
                },
                {
                    title:"Player No. 1",
                    director:"Steven spielberg",
                    year:2018
                },
                {
                    title:"The Adam Project",
                    director:"Shawn levy",
                    year:2022
                }
                    ]

                    console.log(action);

            let Fantasy = [
                {
                    title:"Spide-man:No way home",
                    director:"Jon watts",
                    year:2021
                },
                {
                    title:"Shang-chi and the Legend of the Ten Rings",
                    director:"Destin crestton",
                    year:2021
                },
                {
                    title:"Sonic: The Movie",
                    director:"Jef fowler",
                    year:2020
                }
                    ]       

                    console.log(Fantasy);


//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 

if(action[0].title == "Red alert " ){
    console.log(`MY FAVORIT MOVIE IS ${action[0].title}`);
}else{
    console.log(`${action[0].title} NOT EVEN 5 STARS`)
}

