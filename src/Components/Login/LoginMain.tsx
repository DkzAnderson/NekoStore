import { FormBox } from './FormBox';


export const LoginMain = () => {
  
      const styles = {
        main: 'flex font-roboto',
        content: 'min-h-dvh w-full flex flex-col items-center justify-center bg-st-100',

      }


  return (
    <div className={styles.main}>
        <div className={styles.content}>
            <FormBox/>
        </div>
    </div>
  )
}
