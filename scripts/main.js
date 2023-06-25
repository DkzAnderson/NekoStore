
function selectSerie(number){

    serieSelected = seriesContainer[number]

        //coloca el texto de temporada 1 por defecto
        if(seasonSelected == 4){
            seasonTitle.innerText = `OVA`
        } else{
            seasonTitle.innerText = `Temporada ${seasonSelected+1}`
        }
        // dibuja los botones correspondientes según temporadas
        count = serieSelected.caps.length
        i= 0
        seasonContainer.forEach(element => {
            if(count != i){
                element.style.display = 'flex'
                i++
            } else {
                element.style.display = 'none'
            }
    
        });
    
        setCaps(serieSelected);
        serieSelected.setDescription();
        interfazHome.style.display = 'none'
        interfazDescripcion.style.display = 'flex'

}

function showCap(cap){
    /*
        se busca en la serie seleccionada el capitulo
        y se trae directamente del arreglo por su index.
        se agregan a los elementos:
            titulo, descripcion y el src del video
    */
    capSelected = cap
    capSelected--
    switch (seasonSelected) {
        case 0:
            videoTitle.innerText = serieSelected.name
            videoDescription.innerText = `${serieSelected.name} T1: episodio ${capSelected+1} `
            videoMedia.src = serieSelected.caps[0][capSelected]
            break;
        case 1:
            videoTitle.innerText = serieSelected.name
            videoDescription.innerText =  `${serieSelected.name} T2: episodio ${capSelected+1} `
            videoMedia.src = serieSelected.caps[1][capSelected]
            break;
        case 2:
            videoTitle.innerText = serieSelected.name
            videoDescription.innerText =  `${serieSelected.name} T3: episodio ${capSelected+1} `
            videoMedia.src = serieSelected.caps[2][capSelected]
            break;
        case 3:
            videoTitle.innerText = serieSelected.name
            videoDescription.innerText =  `${serieSelected.name} T4: episodio ${capSelected+1} `
            videoMedia.src = serieSelected.caps[3][capSelected]
            break;
        case 4:
            videoTitle.innerText = serieSelected.name
            videoDescription.innerText =  `${serieSelected.name} OVA: episodio ${capSelected+1} `
            videoMedia.src = serieSelected.caps[4][capSelected]
            break;
        default:
            break;
    }
    
    interfazDescripcion.style.display = 'none'
    interfazVideoPlayer.style.display = 'flex'
}

function setCaps(){
    /*
    agrega la descripción de los capítulos según la temporada y 
    la cantidad de capítulos de la temporada.
    también hace desaparecer el resto de contenedores
    si no tienen una descripción.

    */
    count= 0
    switch (seasonSelected) {
        case 0:
            descriptionCaps.forEach(element => {
                // agregar textos al contenedor de capitulos
                if(count <= serieSelected.caps[0].length){
                    element.style.display = 'flex'
                    element.innerText = `Episodio ${count+1}`
                    count++
                }else{
                    element.style.display = 'none'
                }
            });
            break;
        case 1:
            descriptionCaps.forEach(element => {
                if(count <= serieSelected.caps[1].length){
                    element.style.display = 'flex'
                    element.innerText = `Episodio ${count+1}`
                    count++
                }else{
                    element.style.display = 'none'
                }
            });
            break;
        case 2:
            descriptionCaps.forEach(element => {
                if(count <= serieSelected.caps[2].length){
                    element.style.display = 'flex'
                    element.innerText = `Episodio ${count+1}`
                    count++
                }else{
                    element.style.display = 'none'
                }
            });
            break;
        case 3 :
            descriptionCaps.forEach(element => {
                if(count <= serieSelected.caps[3].length){
                    element.style.display = 'flex'
                    element.innerText = `Episodio ${count+1}`
                    count++
                }else{
                    element.style.display = 'none'
                }
            });
            break;
        case 4 :
                descriptionCaps.forEach(element => {
                    if(count <= serieSelected.caps[4].length){
                        element.style.display = 'flex'
                        element.innerText = `Episodio ${count+1}`
                        count++
                    }else{
                        element.style.display = 'none'
                    }
                });
                break;
        default:
            descriptionCaps.forEach(element => {
                // se carga la primera temporada por defecto
                if(count <= serieSelected.caps[0].length){
                    element.style.display = 'flex'
                    element.innerText = `Episodio ${count+1}`
                    count++
                }else{
                    element.style.display = 'none'
                }
            });
            break;
    }
    // elimina le ultimo elemento dibujado(el cual deberia estar vacio)
        count--
        descriptionCaps[count].style.display = 'none'
}

function setSeason(season){
    seasonSelected = season
    if(seasonSelected == 4){
        seasonTitle.innerText = `OVA`
    } else{
        seasonTitle.innerText = `Temporada ${seasonSelected+1}`
    }
    setCaps(serieSelected);
}


function Home(){
    interfazHome.style.display = 'flex'
    interfazDescripcion.style.display = 'none'
    interfazVideoPlayer.style.display = 'none'
}

function videoPlayer(direction){
    capSelected
    if(direction == "next" && capSelected <= (serieSelected.caps[seasonSelected].length - 2)){
        capSelected = capSelected + 2
        showCap(capSelected);
    } else if (direction == "back" && capSelected >= 1){
        capSelected = capSelected--
        showCap(capSelected)
    }
}

function setInfo(){
    let cuenta = 0
    // agrega la descripcion de cada serie dentro de los articulos en el html
    seriesContainer.forEach(element => {
        if(cuenta <= seriesContainer.length){
            let name = element.name
            let poster = element.imgPoster
            articlesHTML[cuenta].setDescription(name,poster)
        }
        cuenta++
    });
    articlesHTML[cuenta].article.style.display = 'none'

    articlesHTML.forEach(element => {
        if(cuenta <= articlesHTML.length){
            element[cuenta].article.style.display = 'none'
        }
        cuenta++
    });
}

setInfo();
