import { useState } from "react";
import { EpisodeBox } from "./EpisodeBox";
import { IoMdArrowDropright } from "react-icons/io";

interface Season {
    name: string;
    episodes: string[];
    image: string;
}

interface Props {
    data: Season;
    index: number;
}


export const SeasonBox: React.FC<Props> = ({data,index}) => {

    const [showEpisodes,setShowEpisodes] = useState(false);

    const styles = {
        main: 'flex z-10 ',

        titleBox: {
            main:  'flex w-full justify-between p-2',
            title: `${showEpisodes ? 'text-rd' : 'text-white'} duration-300`,
            icon : `text-xl ${showEpisodes ? 'text-rd -rotate-90' : 'text-white rotate-90'} duration-300`
        },

        list: {
            main:`w-full gap-2 ${showEpisodes ? 'flex flex-col' : 'hidden'} scroll max-h-[200px] overflow-auto`
        },
    }


  return (
    <div className={styles.main}>
          <div className='flex flex-col w-full'>
              <button 
                className={styles.titleBox.main}
                onClick={()=>setShowEpisodes(!showEpisodes)}
              >
                <h1 className={styles.titleBox.title}>
                    {data.name}
                </h1>
                <span className={styles.titleBox.icon}>
                    <IoMdArrowDropright/>
                </span>
              </button>
              <ul className={styles.list.main}>
                {data.episodes.map((ep,i)=>(
                    <li
                        key={i}
                    >
                        <EpisodeBox
                            name={data.name}
                            episode={i+1}
                            url={ep}
                            image={data.image}
                        />
                    </li>
                ))}
              </ul>
          </div>

    </div>
  )
}
