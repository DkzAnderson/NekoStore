import '../../Scroll.css'

interface data {
    name: string;
    description: string;
    categories: string[];
}



export const DescriptionBox: React.FC<data> = ({name,description,categories}) => {
  
    const styles = {
        main: 'flex w-full h-auto bg-st-200/80 z-10 rounded-lg',
        content: 'flex flex-col w-full gap-4 p-4 ',
        title: 'text-3xl text-center text-white font-bold',
        description: 'px-2 scroll font-light text-gray-400 overflow-auto max-h-32',

        categoriesList: {
            main: 'flex flex-wrap gap-x-4 gap-y-2',
            items: 'bg-rd px-1 rounded'
        }
    }
  
    return (
    <section className={styles.main}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                {name}
            </h1>

            <ul className={styles.categoriesList.main}>
                {categories.map((data,i)=>(
                    <li
                        key={i}
                        className={styles.categoriesList.items}
                    >
                        {data}
                    </li>
                ))}
            </ul>

            <p className={styles.description}>
                {description}
            </p>
        </div>
    </section>
  )
}
