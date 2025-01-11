import { NavBar } from "../NavBar/NavBar"
import { FormBox } from "./FormBox"

export const RegisterMain = () => {

    const styles = {
        main: 'flex font-roboto',
        content: 'min-h-dvh w-full flex flex-col items-center justify-center p-8 bg-st-100',

      }


  return (
    <div className={styles.main}>
        <div className={styles.content}>
            <FormBox/>
        </div>  
        <NavBar/>
    </div>
  )
}
