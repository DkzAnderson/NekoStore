interface Props {
    image: string;
    name: string;
}
export const Poster: React.FC<Props> = ({image,name}) => {
    
    const styles = {
        main: 'flex w-full h-auto bg-st-200/80 z-10 rounded-lg',
        imageBox: 'flex size-full ',
        image: 'size-full object-cover rounded-lg'
    }


  return (
    <div className={styles.main}>
        <picture className={styles.imageBox}>
            <img 
                className={styles.image}
                src={image} 
                alt={`${name}-poster`} 
            />
        </picture>
    </div>
  )
}
