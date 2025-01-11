import { useEffect, useState } from "react";



interface Props {
  type: string; 
  DefaultValue: string | null;
  set: Function;
}

export const ProfileInput : React.FC< Props > = ({type,DefaultValue,set}) => {

  const [inputValueLength,setInputValueLength] = useState<number> (0)
  const [title,setTitle] = useState< string >('');
  const [inputType,setInputType] = useState< string >('')
  const [errorMessage,setErrorMessage] = useState< string > ('')

  const CheckInputValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const name = e.target.value;

    setInputValueLength(name.length);
    set(name.length);
  }

  const styles = {
    main: 'relative h-16 flex items-end',
    title: `absolute top-0 text-gray-400 font-bold text-sm`,
    
    input : `z-10 bg-transparent border-b-2 text-xl text-white outline-none w-full placeholder:text-red-400 placeholder:font-bold truncate `,
    
    inputNumber: `${inputValueLength < 8 || inputValueLength > 50 ? 'border-b-red-400 focus:border-red-400 border-b-4' : 'focus:border-gray-300 '}`,
    inputEmail: `${inputValueLength < 6 || inputValueLength > 20 ? 'border-b-red-400 focus:border-red-400 border-b-4' : 'focus:border-gray-300 '}`,
    inputName: `${inputValueLength < 6 || inputValueLength > 20 ? 'border-b-red-400 focus:border-red-400 border-b-4' : 'focus:border-gray-300 '}`
  }

  useEffect(()=>{

    if(type === 'name'){
      setTitle('Nombre del usuario');
      setInputType('text');
      setErrorMessage('Debe tener entre 6 y 50 caracteres.');
    }

    if(type === 'phone'){
      setTitle('Número de telefono');
      setInputType('number');
      setErrorMessage('Debe tener entre 8 y 20 caracteres.')
    }

    if(type === 'email'){
      setTitle('Email');
      setInputType('email');
      setErrorMessage('Debe tener entre 6 y 20 caracteres');
    }

    if(DefaultValue != null) {
      setInputValueLength(DefaultValue.length)

      if(DefaultValue.length > 6){
        set(6)
      }
    }

  },[])
  
  
    return(
      <div className={styles.main}>
          <h2 className={styles.title}>
            {title}
          </h2> 

          <input
            className={
              type === 'name' ? `${styles.input} ${styles.inputName}`
              : type === 'phone' ? `${styles.input} ${styles.inputNumber}`
              : `${styles.input} ${styles.inputEmail}`
            }
            type={inputType}
            name={type}
            placeholder={errorMessage}
            defaultValue={DefaultValue === null ? '' : DefaultValue}
            onChange={(e)=>CheckInputValue(e)}
          />
      </div>
    )
}
