import { Link } from "react-router-dom";

interface Props {
    episode: number;
    url: string;
    image: string;
    name: string;
}


export const EpisodeBox: React.FC<Props> = ({ episode, url, image, name }) => {

    {/*
        Falta agregar la url al Link
        para redireccionar al componente 
        de media
        
        */}

    const styles = {
        main: 'w-full flex',
        content: 'grid grid-cols-[20%_80%] w-full h-14 group',
        imageBox: 'size-full overflow-hidden rounded-lg',
        image: 'size-full object-cover',
        titleBox: 'flex p-1 items-center',
        title: 'text-gray-400 group-hover:text-rd',

    }

    return (
        <Link className={styles.main}
            to={''}
        >
            <div className={styles.content}>
                <picture className={styles.imageBox}>
                    <img
                        className={styles.image}
                        src={image}
                        alt={`${name}-poster`}
                    />
                </picture>

                <span className={styles.titleBox}>
                    <h1 className={styles.title}>
                        Episodio {episode}
                    </h1>
                </span>
            </div>
        </Link>
    )
}
