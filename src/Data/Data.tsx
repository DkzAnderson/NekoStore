
// estructura de cada serie

export const serie = {
    name: 'Overlord',
    seasons: [
        {
            name: 'Temporada 1',
            poster: 'https://i.postimg.cc/tRKMwZRZ/Overlord-S1.jpg',
            episodes: [
                {
                    name: 'Episodio 1',
                    url : ''
                }
            ]
        }
    ],
    background: 'https://i.postimg.cc/k4DH3Wt8/Overlord-Alternative.jpg'
}

export const testDb = [
    serie,
    serie,
    serie,
    serie,
    serie
]

// ---------------------------------

export const categories = {
    action : "Acción",
    adventure: "Aventura",
    fantasy: "Fantasía",
    isekai: "Isekai",
    shonen: "Shonen",
    supernatural: "Sobrenatural"
}

export class Season {
    name: string;
    episodes: object;
    image: string;

    constructor({
        name='Temporada',
        episodes,
        image
    }:{
        name?: string,
        episodes: object,
        image: string
    }){
       this.name = name; 
       this.episodes = episodes; 
       this.image = image;
    }
}

export class Serie {
    name: string;
    seasons: Array<Season>;
    images: Array<string>;
    categories: Array<string>;
    description: string


    constructor({
        name, seasons,
        images, categories,
        description
    }:{
        name: string,
        seasons: Array<Season>,
        images: Array<string>,
        categories: Array<string>,
        description: string
    }){

        this.name = name;
        this.seasons = seasons;
        this.images = images;
        this.categories = categories;
        this.description = description;
    }

}

