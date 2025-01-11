import { useState } from "react"

export const Spiners = () => {

    const images = [
        'https://i.gifer.com/2zGr.gif',
        'https://giffiles.alphacoders.com/121/12161.gif',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45bd2bf7-1164-44e1-8365-d3c57b571f3e/d47zlqz-8d7c4bb6-6241-4e9c-95e0-510a6df592e6.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi80NWJkMmJmNy0xMTY0LTQ0ZTEtODM2NS1kM2M1N2I1NzFmM2UvZDQ3emxxei04ZDdjNGJiNi02MjQxLTRlOWMtOTVlMC01MTBhNmRmNTkyZTYuZ2lmIn1dXX0.MSs81_Ju5i4WWHrUig5K2o0xZy5NdysXb7DEO8SqNeU',
        'https://media.tenor.com/NxdgxQ7erzYAAAAj/pokemon-squirtle.gif',

    ]

    const [currentSpinner,setSpinner] = useState(3);

    const styles = {
        main: 'flex size-full min-h-96 font-nunito',
        content: 'flex flex-col items-center justify-between w-full h-full max-w-[300px]',
        imgBox: 'size-full flex items-center justify-center',
        img: 'size-full object-contain',


        title: {
            ul: 'flex gap-0.5',
            li: 'text-3xl font-bold text-white letter'
        }
    }

    const title = ['C','a','r','g','a','n','d','o','.','.','.']

  return (
    <section className={styles.main}>
        <div className={styles.content}>
            <picture className={styles.imgBox}>

            <img
                className={styles.img}
                src={images[currentSpinner]}
                alt="spinner"
            >

            </img>
            </picture>

            <ul className={styles.title.ul}>
                {title.map((letter,i)=>(
                    <li
                        key={i}
                        className={styles.title.li}
                    >  
                        {letter}
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}
