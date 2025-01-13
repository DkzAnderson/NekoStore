import { useEffect, useState } from "react"
import { CardList } from "../Lists/CardList"
import { GetAllSeriesFromDb } from "../FireBase/DbFunctions"
import { Hero } from "./Hero"
import { Footer } from "../Footer/Footer"


export const Start = () => {

    const [data,setData] = useState<object[]> ([{}])

    const styles = {
        main : 'flex flex-col size-full relative',
        content: 'flex flex-col pt-[9vh] pb-20 gap-10 min-h-screen w-full bg-st-100'
    }

    useEffect(()=>{
      const FetchData = async()=>{
        const data = await GetAllSeriesFromDb('lastUpdated');
        setData(data);
      }
      FetchData();
    },[])

  return (
    <div className={styles.main}>
        <div className={styles.content}>
          <Hero/>
          {
            data.length >= 2 ? 
            <div className="flex flex-col gap-4 px-4 justify-center items-center">
              <span className="w-full max-w-[1024px] p-3 bg-gradient-to-b from-rd to-nd rounded-t-2xl">
                <h1 className="font-bold text-white tracking-widest text-lg text-center">
                  Ultimos subidos
                </h1>
              </span>

            <CardList
            data={data}
          />
            </div>
          : 
          ''
          }

        </div> 
        <Footer/>
    </div>
  )
}
