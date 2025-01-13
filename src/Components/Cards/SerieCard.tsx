import { Link } from "react-router-dom";

interface Props {
    name: string;
    image: string;
}

export const SerieCard: React.FC<Props> = ({name,image}) => {

    const styles = {
        main: 'flex size-full group',
        content: 'relative rounded p-2 flex size-full items-end justify-center shadow-[0px_0px_10px_0px] shadow-transparent group-hover:shadow-rd',
        imageBox: 'absolute left-0 top-0 z-0 size-full rounded overflow-hidden ',
        image: 'size-full object-cover rounded',
        title: 'font-bold z-10 group-hover:text-rd group-hover:underline text-white text-center'
    }

  return (
    <div className={styles.main}>
        <Link
            to={`/details/${name}`}
            className={styles.content}
        >
            <picture className={styles.imageBox}>
                <img 
                    className={styles.image}
                    src={image} 
                    alt="" 
                    loading="lazy"
                    style={{
                        // Imagen con degradado en parte inferior
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
                        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
                      }}
                />
            </picture>
            <h1 className={styles.title}>
                {name}
            </h1>
        </Link>
    </div>
  )
}
