import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DotLoader } from 'react-spinners';
import { GetSerieFromDb } from "../FireBase/DbFunctions";
import { DescriptionBox } from "./DescriptionBox";
import { Poster } from "./Poster";
import { SeasonBox } from "./SeasonBox";
import '../../Scroll.css'
import { Footer } from "../Footer/Footer";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

interface Season {
    episodes: string[];
    name: string;
    image: string;
}

interface Serie {
    name: string;
    description: string;
    categories: string[];
    images: string[];
    seasons: Season[];
}

export const Details = () => {

    const { id } = useParams();
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState<Serie | null>(null);

    const styles = {
        main: 'w-full min-h-screen bg-st-100 flex flex-col ',
        content: 'relative z-10 flex flex-col size-full p-5 pb-20 mt-[9vh] gap-10',

        seasonBox: 'Scroll flex flex-col gap-2 max-h-[600px] z-10 bg-st-200/80 p-2 rounded-lg overflow-auto',

        notFound: {
            main: 'w-full min-h-screen p-10 gap-10 flex flex-col items-center justify-center',
            title1: 'text-6xl text-white',
            title2: 'text-xl text-center text-gray-400',
            button: 'flex items-center justify-center bg-rd h-[55px] w-full rounded-lg text-white uppercase text-xl'
        },

        background: {
            main: 'fixed flex top-[9vh] left-0 w-full min-h-screen border z-0 opacity-50',
            image:'w-full min-h-screen object-cover z-0',

        },

        spinner: 'size-full min-h-screen flex items-center justify-center'
    }

    const spinner = {
        color: '#1e40af',
        size: 180,
        ariaLabel: "Loading Spinner",
        dataTest: "loader",
        speed: 0.8
    }


    useEffect(()=>{
        const FetchData = async ()=>{
            try {
                if(id != null){
                    const data = await GetSerieFromDb(id);
                    setData(data);
                    setLoading(false);
                }
            } catch (error) {
                console.log('error: '+error);
                setLoading(false);
            }
        }

        FetchData();
    },[id])

    // Pantalla de carga
    if(loading){
        return (
            <section className={styles.main}>
                <div className={styles.spinner}>
                        <DotLoader 
                            color={spinner.color}
                            loading={loading}
                            cssOverride={override}
                            size={spinner.size}
                            aria-label={spinner.ariaLabel}
                            data-testid={spinner.dataTest}
                            speedMultiplier={spinner.speed}
                        />
                </div>
            </section>
          )
    }
    // Serie no encontrada
    if(data === null || data === undefined){
        return (
            <section className={styles.main}>
                <div className={styles.notFound.main}>
                    <h3 className={styles.notFound.title1}>
                        Opps...
                    </h3>

                    <h3 className={styles.notFound.title2}>
                        Lo sentimos, no hemos conseguido 
                        la serie que buscas.
                    </h3>

                    <Link 
                        className={styles.notFound.button}
                        to={'/'}
                    >
                        Volver al inicio
                    </Link>
                </div>
            </section>
          )
    }
    // datos de la serie
    if(loading === false &&
         data !== null ||
          data !== undefined){
        return (
            <section className={styles.main}>
                <div className={styles.content}>
                        {/* Imagen de fondo */}
                    <div className={styles.background.main}>
                        <img 
                            loading="lazy"
                            className={styles.background.image}
                            src={data.images[2] ? data.images[2] : ''} 
                            alt={data.name ? `${data.name}-background` : 'background'} 
                        />
                    </div>
                    {/* Contenido */}
                    <DescriptionBox
                        name={data.name}
                        description={data.description}
                        categories={data.categories}
                    />
                    <Poster
                        name={data.name}
                        image={data.images[0]}
                    />

                    <ul className={styles.seasonBox}>
                        {data.seasons.map((data,i)=>(
                            <li key={i}>
                                <SeasonBox
                                    data={data}
                                    index={i}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <Footer/>
            </section>
          )
    }

}
