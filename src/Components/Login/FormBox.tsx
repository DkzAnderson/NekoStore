import { Form, Link, useNavigate } from 'react-router-dom'
import { InputBox } from "./InputBox";
import { toast } from 'react-toastify';
import { DotLoader } from 'react-spinners';
import { SingInWithMailAndPassword } from '../../Data/Firebase';

import { useState } from 'react';

const Alert = (type:string,txt:string) => {
    switch (type) {
        case 'error':
                toast.error(
                    txt, 
                    {
                        position: 'top-center',
                        theme: 'dark'
                    }
                );
            break;
        case 'warning':
            
            break;
        case 'success' :
            toast.success(
                txt, 
                {
                    position: 'top-center',
                    theme: 'dark',
                    autoClose: 1300
                }
            );
            break;
    
        default:
            //info

            break;
    }

};

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


export const FormBox = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const styles = {
        main: 'flex flex-col items-center justify-center',
        content: 'flex flex-col bg-st-200 rounded p-2 gap-6 min-h-96 min-w-72',

        formMain: 'flex flex-col gap-6 justify-start p-4',
        formBtn: 'rounded text-white mt-10 bg-rd text-2xl font-bold py-2 active:bg-nd hover:bg-nd duration-300',

        bottomBox: {
            main: 'flex gap-1 text-white justify-center items-center min-h-10',
            txt: '',
            link: 'text-rd underline hover:font-bold hover:text-lg duration-300'
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

    function GetData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const mail = (formData.get('mail') || '') as string;
        const password = (formData.get('password') || '') as string;

        if (password != null) {
            password.length < 5 ?
                Alert(
                    'error',
                    'La contraseña debe tener más de 4 carácteres.'
                )
                :
                SingInWithMailAndPassword(mail, password,setLoading,navigate)
                
        }
    }

    return (
        <section className={styles.main}>
            {/* Contenido */}
            <div className={styles.content}>

                <Form
                    className={styles.formMain}
                    onSubmit={(e) => {
                        setLoading(true)
                        GetData(e)
                    }}
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


                    <button
                        type='submit'
                        className={styles.formBtn}
                    >
                        Iniciar sesion
                    </button>
                </Form>

                <div className={styles.bottomBox.main}>
                    <p className={styles.bottomBox.txt}>
                        ¿Aún no tienes cuenta?
                    </p>
                    <Link
                        className={styles.bottomBox.link}
                        to={'/register'}
                    >
                        registrate
                    </Link>
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
