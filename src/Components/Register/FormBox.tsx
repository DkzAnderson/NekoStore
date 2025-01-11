import { Form, Link, useNavigate } from 'react-router-dom'
import { InputBox } from '../Login/InputBox';
import { DotLoader } from 'react-spinners';
import { Alert } from '../../Alerts';

import { RegisterNewUser } from '../../Data/Firebase';
import { useState } from 'react';

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export const FormBox = () => {

    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const styles = {
        main  : 'size-full flex flex-col items-center justify-center ',
        content: 'w-full flex flex-col bg-st-200 rounded p-3',

        title: 'text-lg text-center text-white font-bold mt-5',
        formMain: 'flex flex-col gap-10 justify-start p-4',
        formBtn: 'rounded text-white mt-10 bg-rd text-2xl font-bold py-2 active:bg-nd hover:bg-nd duration-300',

        bottomBox: {
            main: 'flex gap-1 text-white justify-center items-center min-h-10',
            txt: 'flex gap-2',
            link: 'text-rd font-bold underline'
        },

        spinner: 'absolute bottom-16'
    }

    const spinner = {
        color: '#1e40af',
        size: 90,
        ariaLabel: "Loading Spinner",
        dataTest: "loader",
        speed: 0.8
    }

    function GetData (e:React.FormEvent<HTMLFormElement>) {
        setLoading(true);
        const formData = new FormData (e.currentTarget);
        
        const mail = (formData.get('mail') || '') as string;
        const password = (formData.get('password') || '') as string;
        const repassword = (formData.get('re-password') || '') as string;

        if(password != null){
            if(password.length < 5){
                setLoading(false)
                Alert(
                    'error',
                    'La contraseña debe tener más de 4 carácteres.'
                ) 
                return
            }
        }

        if(repassword != password){
            setLoading(false)
            Alert(
                'error',
                'Las contraseñas deben ser iguales'
            )
            return
        } 

        RegisterNewUser(mail,password,setLoading,navigate);
    }

  return (
    <section className={styles.main}>
        {/* Contenido */}
        <div className={styles.content}>
            <h1 className={styles.title}>
                REGISTRO DE USUARIO
            </h1>

            <hr 
                className='w-[30%] h-[1px] bg-white self-center my-3'
            />

            <Form
                className={styles.formMain}
                onSubmit={(e)=>GetData(e)}
                autoComplete="off"
            >
                <InputBox
                    name='mail'
                    type='email'
                    title='Email'
                />

                <InputBox
                    name='password'
                    type='password'
                    title='Contraseña'
                />

                <InputBox
                    name='re-password'
                    type='password'
                    title='Repite la contraseña'
                />

                <button
                    type='submit'
                    className={styles.formBtn}
                >
                    Registrarse
                </button>
            </Form>

            <div className={styles.bottomBox.main}>
            
            <p className={styles.bottomBox.txt}>
                ¿ Ya tienes cuenta ? 
                <Link
                    className={styles.bottomBox.link}
                    to={'/login'}
                >
                    Inicia sesión
                </Link>
            </p>

            </div>

        </div>
        {/* Spinner de carga */}
        <div className={styles.spinner}>
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
    </section>
  )
}
