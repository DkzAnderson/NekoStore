import { useEffect, useState } from "react"
import { Slider } from "./Slider"
import { DotLoader } from 'react-spinners';
import { GetAllSeriesFromDb } from "../FireBase/DbFunctions";

interface Image {
  name: string;
  imgs: string[];
}

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Hero = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [images, setImages] = useState<Image[]>([])

  const styles = {
    main: 'flex items-center justify-center w-full h-[480px]'
  }

  const spinner = {
    color: '#1e40af',
    size: 180,
    ariaLabel: "Loading Spinner",
    dataTest: "loader",
    speed: 0.8
  }

  useEffect(()=>{
    const GetData = async () =>{
      let imagesToSlider: Image[] = [];
      const data: any[] = await GetAllSeriesFromDb('lastUpdated');

      data.map((values)=>{
        imagesToSlider.push({
          name: values.name ? values.name : null,
          imgs: values.images
        })
      })
      setImages(imagesToSlider);
      setLoading(false);
    }

    GetData();

  },[])



  if (loading) {
    return (
      <div className={styles.main}>
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
    )
  }

  if (loading === false) {
    return (
      <div className={styles.main}>
        <Slider
          images={images}
        />
      </div>
    )
  }
}
