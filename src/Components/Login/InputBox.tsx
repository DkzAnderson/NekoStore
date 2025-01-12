import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaKey } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

interface Props {
    type: string;
    name: string;
    title: string;
}


export const InputBox : React.FC<Props> = ({type,name,title}) => {

    const [onFocus,setFocus] = useState(false);
    const [isEmpty,setEmpty] = useState(true);

    const checkValues = (e: React.ChangeEvent<HTMLInputElement>)=>{

        const value = e.target.value;

    
        if(value.length >= 1){
            setEmpty(false)
            setFocus(true)
        } else {
            setEmpty(true)
            
        }
    }


    let styles = {
        main : 'size-auto flex',
        content: 'w-full flex items-end relative min-h-16  ',
        input: 'relative bg-transparent z-10 border-b-2 w-full max-w-full text-xl sm:text-base outline-none py-2 sm:py-0 px-1 truncate text-gray-400 focus:border-rd focus:border-b-[2px] focus:text-white',
        title: `absolute z-0 left-6 text-xl sm:text-base font-bold duration-300 ${onFocus ? 'text-rd' : 'text-white'} `,
        iconBox: 'absolute z-10 -left-1 p-1 duration-300 ',
        icon: ` ${onFocus ? 'text-rd' : 'text-white'} text-xl sm:text-lg duration-300`,
        underText: 'absolute -bottom-6 text-sm sm:text-[12px] text-gray-400'
    }

    // Movimiento del PlaceHolder + icono
    if(isEmpty == false){
        // si no esta vacio
        styles.title += '-translate-y-12 sm:-translate-y-8'
        styles.iconBox += '-translate-y-12 sm:-translate-y-8'
    } else if(onFocus) {
        // si esta en foco
       styles.title += '-translate-y-12 sm:-translate-y-8';
       styles.iconBox += '-translate-y-12 sm:-translate-y-8'
    } else {
        styles.title += '-translate-y-1'
        styles.iconBox += '-translate-y-1'
    }

  return (
    <div className={styles.main}>

        <div className={styles.content}>
            <label 
                htmlFor={name}
                className={styles.title}
            >
                {title}
            </label>

            <input
            className={styles.input}
            id={name}
            type={type}
            name={name}
            onChange={(e)=>checkValues(e)}
            onFocus={()=>setFocus(true)}
            onBlur={()=>setFocus(false)}
            required
        />

        <span className={styles.iconBox}>
            { type === 'email' ? <IoIosMail className={styles.icon}/>
                : type === 'password' ? <FaKey  className={styles.icon}/>
                : <FaUserCircle className={styles.icon}/> 
             }
        </span>
        {
            type === 'password' ?
            <h5 className={styles.underText}>
                {
                    type === 'password' && name != 're-password' ? 
                    'Debe tener al menos 6 caracteres.' :
                    ''
                }
                {
                    type === 'password' && name === 're-password' ? 
                    'Repite la contraseña'
                    : ''
                }
            </h5>
            : ''
        }

        </div>

    </div>
  )
}
