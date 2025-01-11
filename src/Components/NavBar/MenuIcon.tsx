import React from 'react'

interface Props {
    state: boolean;
}

export const MenuIcon : React.FC<Props> = ({state}) => {
  
  const styles = {
    main :'',
    content: 'relative size-ful size-12',
    line1: `absolute ${state ? 'w-11/12 bg-rd -translate-x-[21px] rotate-45 translate-y-[21px]' : 'translate-y-[7px] -translate-x-[21px] w-[45%]'} h-[5px] bg-rd rounded-full duration-300`,
    line2: `absolute ${state ? 'hidden' : 'translate-y-[19px] -translate-x-[21px]'} w-11/12 h-[5px] bg-rd rounded-full duration-300`,
    line3: `absolute ${state ? 'w-11/12 bg-rd -translate-x-[21px] -rotate-45 translate-y-[21px]' : 'translate-y-[32px] -translate-x-[0px] w-[45%]'} h-[5px] bg-rd rounded-full duration-300`
  }
  
  
    return (
    <div className={styles.main}>
        <div className={styles.content}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
        </div>
    </div>
  )
}
