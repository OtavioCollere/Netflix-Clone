function buscaFilmes(){

    let filme = $('#search').val();

    let url = `http://www.omdbapi.com/?s=${filme}&apikey=1e9b0ca0`;

    let ajax = new XMLHttpRequest();

    ajax.open('GET', url);
    ajax.send();

    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200){
            
            let dados = ajax.responseText;
            let filmeOBJ = JSON.parse(dados);

            if (filmeOBJ.Response != 'False' && filmeOBJ.Error != 'Incorrect IMDb ID.'){

                /* css */
    
                /* ========================== */
        
                let dados_filmes = filmeOBJ.Search;
                var lenght = 0;

                for (var key in dados_filmes){
                    if (dados_filmes.hasOwnProperty(key)){
                        lenght++;
                    }
                }

                $('.movies-area').append('<div class=\"grid-area\">') // adicionar a cada 4
    
                for (var i=0; i<lenght; i++){

                $('.grid-area').append(
                    '<div class=\"card\">' +
    
                        '<div class=\"card-img\">' +
                            `<img src="${dados_filmes[i].Poster}"></img>` +
                        '</div>' +
    
                        `<div class=\"card-text\">`+
                            `<div class=\"year\"> ${dados_filmes[i].Year} </div>`+
                            `<h3>${dados_filmes[i].Title}</h3>`+
                        '</div>'+
    
                    '</div>'
                )
    
                }
    
    
                
                $('.movies-area').append('</div>') // adicionar a cada 4
    
                $('.movies-area').css('display', 'flex');

                $('main').css('height', '70vh');
            } else {
                alert('ERRO!, você precisa informar um nome válido!!!');
            }

        }


    }
}

