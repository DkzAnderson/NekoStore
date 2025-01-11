import { useState } from "react";
import '../../Scroll.css'

const images = [
  'https://gif-avatars.com/img/150x150/solo-leveling.gif',
  'https://media.tenor.com/lixfij0N8pUAAAAM/1235.gif',
  'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW9xdmQyZm1hd2V4eDF0OHlsNzRmMGNiOTU0OW14bHZsZTd0MHowcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1lSSrYQUVY3WU/giphy.webp',
  'https://c.tenor.com/33SEDySh9y4AAAAC/tenor.gif',
  'https://media.tenor.com/Dad5rgWBv2cAAAAM/frieren-sousou.gif',
  "https://media.tenor.com/OeH90hWmnL8AAAAM/frieren-frieren-beyond-journey's-end.gif",

]


interface Props {
    setProfileImage: Function;
    image: string;
}

export const ProfileImageSlider : React.FC< Props > = ({ setProfileImage, image
}) => {

    const [currentImage,setCurrentImage] = useState< string>(image);

    const SelectAvatar = (value:string)=>{
        setProfileImage(value)
        setCurrentImage(value)
    }


    const styles = {
        main: 'w-full h-[240px] overflow-hidden',
        content: 'relative flex size-full top-0 left-0 overflow-hidden',
        
        profile: `scroll p-4 flex size-full overflow-auto gap-10 duration-300`,
        background: `absolute scroll flex size-full overflow-auto gap-10 duration-300`,

        items: 'w-[100%] flex flex-col items-center justify-center cursor-pointer',
        imageBox: `size-28 flex rounded-full overflow-hidden border-[3px] duration-300`,
        image: 'size-full object-cover rounded-full',
        imageSelected: ' border-rd size-44 border-4',

    }

    return(
        <section className={styles.main}>
            <div className={styles.content}>
                <ul className={styles.profile}>
                    {images.map((image,i)=>(
                        <li
                            key={i}
                            className={styles.items}
                            onClick={()=>{SelectAvatar(image)}}
                        >
                            <picture className={`${styles.imageBox} ${currentImage === image ? styles.imageSelected : ''}`}>
                            <img 
                                className={styles.image}
                                src={image} 
                                alt={`slide-${i}-image`} 
                            />
                            </picture>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
};