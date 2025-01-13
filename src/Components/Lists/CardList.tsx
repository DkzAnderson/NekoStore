import { SerieCard } from "../Cards/SerieCard";

interface Cards {
    name: string;
    image: string;
}

interface Props {
    data: any
}




export const CardList: React.FC<Props> = ({data}) => {
    
    const styles = {
        main: 'flex w-full justify-center font-roboto',
        list : 'w-full max-w-[1024px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-4',
        items: 'w-full h-[320px]'
    }
    
    return (
    <div className={styles.main}>
        <ul className={styles.list}>
        {data.map((data:any,i:number)=>(
            <li key={i}
                className={styles.items}
            >
                    <SerieCard
                        name={data.name}
                        image={data.images[0]}
                    />
            </li>
        ))}
        </ul>

    </div>
  )
}
