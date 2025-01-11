import { imagesToSlider } from "../../Data/Data"
import { Slider } from "./Slider"



export const Hero = () => {
  return (
    <div>
      <Slider
        images={imagesToSlider}
      />
    </div>
  )
}
