import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

export const Footer = () => {

    const styles = {
        main : 'flex w-full px-4 py-10 bg-st-200 z-10',
        content: 'w-full flex flex-col sm:flex-row gap-2 sm:justify-between items-center justify-center',
        
        dataBox: 'flex flex-col items-center',
        title : 'font-bold text-xl text-rd',
        txt: 'text-gray-500 text-sm text-center font-light',

        socialMedia: 'flex gap-4',
        mediaIcons: 'text-5xl text-gray-500 cursor-pointer'

    }

  return (
    <section className={styles.main}>
        <div className={styles.content}>
            <div className={styles.dataBox}>
            <h1 className={styles.title}>
                NekoStore
            </h1>
            <p className={styles.txt}>
                ningún video se encuentra alojado en nuestros
                servidores.
            </p>
            <h5 className={styles.txt}>
                Anderson Ollarves Web 2025
            </h5>
            </div>


            <div className={styles.socialMedia}>
            <FaFacebookSquare className={styles.mediaIcons}/>
            <FaSquareXTwitter className={styles.mediaIcons}/>
            <FaGithubSquare className={styles.mediaIcons}/>
            </div>
        </div>
    </section>
  )
}
