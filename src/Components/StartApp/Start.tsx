import { Hero } from "./Hero"
import { seriesData } from "../../Data/Data"
import { GetAllSeriesFromDb, UploadNewSerie } from "../../Data/Firebase"

const getData = async ()=>{
  const x = await GetAllSeriesFromDb('lastUpdated')
  console.log(x);
}

getData();

export const Start = () => {

    const styles = {
        main : 'flex flex-col size-full relative',
        content: 'flex flex-col pt-[9vh] gap-10 min-h-screen w-full bg-st-100'
    }

  return (
    <div className={styles.main}>
        <div className={styles.content}>
          <Hero/>
        </div> 
    </div>
  )
}
