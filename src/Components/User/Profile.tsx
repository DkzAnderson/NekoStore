import { User } from "firebase/auth";
import { 
    UpdateUserNameAndPhoto ,
    CheckUserState
} from "../FireBase/UserFunctions";

import { useEffect, useState, FormEvent } from "react";

import { DotLoader } from 'react-spinners';
import { BsFillPencilFill } from "react-icons/bs";
import { Form, useNavigate } from "react-router-dom";
import { ProfileInput } from "./ProfileInput";
import { ProfileImageEdit } from "./ProfileImageEdit";



// Definición de tipos para los inputs del formulario 
interface ProfileFormElements extends HTMLFormControlsCollection { 
    name: HTMLInputElement; 
    phone: HTMLInputElement; 
    email: HTMLInputElement; 
} 

interface ProfileFormElement extends HTMLFormElement {
     readonly elements: ProfileFormElements; 
}

// sobreescritura de css para el spinner
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export const Profile = () => {
    const navigate = useNavigate();

    const [currentUser,setUser] = useState< User | null >(null)
    const [loading,setLoading] = useState< boolean >(true);
    const [editImageProfile,setEditImage] = useState(false);
    const [profileImage, setProfileImage] = useState< string >('');
    const [backgroundImage, setBackgroundImage] = useState <string>('');
    const [userNameRef,setUserNameRef] = useState<number>(0);
    //activa el boton de guardado del formulario - linea 196
    const [isFormValid, setIsFormValid] = useState <boolean> (true);
    // false = datos de usuario
    // true = editar datos de usuario
    const [interfaz,setInterfaz] = useState(false);

    const styles = {
        main : 'flex flex-col items-center justify-center w-full min-h-screen bg-st-100 z-50',
        content: 'w-full mt-4 max-w-[400px] px-[36px] flex flex-col',
        
        title: 'pb-6 sm:pb-6 text-white font-bold text-2xl text-center',
    
        // interfaz de edición 
        contentBox: {
            main: 'flex relative flex-col place-items-center w-full max-w-96 gap-2',
            topSide: 'w-full flex items-center justify-center',
            //imagen de perfil
            imageBox: 'relative size-[160px] rounded-full border-[3px] border-white',
            image: 'size-full rounded-full object-cover',
            btnBox: 'absolute -bottom-0 right-2 border-[4px] border-st-100 rounded-full p-2 bg-white text-2xl hover:text-rd hover:bg-gray-300',
            // formulario
            hr: 'w-[15%] h-[1px] mt-10 mb-12 sm:mb-10 bg-gray-400',
            formMain: 'flex flex-col gap-5 w-full ',
            dataBox: 'flex flex-col w-full',
            titles: 'text-gray-500 text-sm font-bold',
            data: 'text-white text-lg sm:text-base',
            button: ' w-full mt-6 sm:mt-8 h-[55px] sm:h-[45px] rounded-lg text-white font-bold text-lg bg-rd hover:bg-nd'
        },

        bottomSide: {
            main: 'w-full flex gap-5 mt-4 font-bold',
            buttonSave: 'w-full h-[55px] sm:h-[50px] text bg-rd hover:bg-nd text-white rounded-lg disabled:bg-gray-500',
            buttonCancel: 'w-full h-[55px] sm:h-[50px] text bg-red-600  hover:bg-red-800  text-white  rounded-lg disabled:text-gray-400'
        },

        imageProfileEdit: `fixed top-0 left-0 bg-st-100/75 z-10 ${editImageProfile ? 'w-full h-full' : 'w-0 h-0'} duration-300`
    }

    const spinner = {
        color: '#1e40af',
        size: 120,
        ariaLabel: "Loading Spinner",
        dataTest: "loader",
        speed: 0.8
    }

    const SaveChanges = (e: FormEvent<ProfileFormElement>)=>{
        e.preventDefault();
        const formElements = e.currentTarget.elements; 
        const name = formElements.name.value; 

        UpdateUserNameAndPhoto(setInterfaz,name);
    }

    useEffect(()=>{
        CheckUserState(
            setUser,
            setLoading,
            setProfileImage
        );
    },[])

    useEffect(() => { 
        if(userNameRef >= 6) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }, [userNameRef]);

    // pantalla de carga
    if(loading){
        return(
            <section className={styles.main}>
                <div className={styles.content+' items-center justify-center'}>
                <div>
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
                </div>
            </section>
        )
    }
    // usuario no conectado
    if(currentUser === null){
        navigate('/')
        // redirecciona al inicio
    } 
    // usuario conectado - edicion de datos
    if(currentUser && interfaz === true){
        return (
            <section className={styles.main}>

                <div className={styles.content}>
                <h1 className={styles.title}>
                    EDITAR PERFIL
                </h1>
                    {/* Contenido principal */}
                    <div className={styles.contentBox.main}>

                        <div className={styles.contentBox.imageBox}>

                            <img
                                className={styles.contentBox.image}
                                src={profileImage}
                                alt='user-profile-image'
                            />

                            <button
                                className={styles.contentBox.btnBox}
                                onClick={() => setEditImage(true)}
                            >
                                <BsFillPencilFill />
                            </button>
                        </div>

                        <hr
                            className={styles.contentBox.hr}
                        />

                            {/* Edicion de perfil */}
                            <Form className={styles.contentBox.formMain}
                                onSubmit={SaveChanges}
                            >
                                <ProfileInput
                                    type="name"
                                    DefaultValue={currentUser.displayName}
                                    set={setUserNameRef}
                                />


                                <div className={styles.bottomSide.main}>
                                    <button
                                        className={styles.bottomSide.buttonSave}
                                        type="submit"
                                        disabled={!isFormValid}
                                    >
                                        GUARDAR
                                    </button>

                                    <button 
                                        className={styles.bottomSide.buttonCancel}
                                        onClick={()=>setInterfaz(false)}
                                    >
                                        CANCELAR
                                    </button>
                                </div>

                            </Form>

                    </div>
                    {/* PopUp para editar las imagenes */}
                    <div className={styles.imageProfileEdit}>
                        <ProfileImageEdit
                            setBackgroundImage={setBackgroundImage}
                            backgroundImage={backgroundImage}
                            profileImage={profileImage}
                            setProfileImage={setProfileImage}
                            isShow={editImageProfile}
                            setShow={setEditImage}
                        />
                    </div>
                </div>
            </section>
        )
    }
    // usuario conectado - datos de usuario
    if(currentUser && interfaz ===  false){
        return (
            <section className={styles.main}>

                <div className={styles.content}>
                <h1 className={styles.title}>
                    EDITAR PERFIL
                </h1>
                    {/* Contenido principal */}
                    <div className={styles.contentBox.main}>

                        <div className={styles.contentBox.topSide}>
                            <picture className={styles.contentBox.imageBox}>
                                <img
                                    className={styles.contentBox.image}
                                    src={profileImage}
                                    alt='user-profile-image'
                                />

                                <button
                                    className={styles.contentBox.btnBox}
                                    onClick={() => setEditImage(true)}
                                >
                                    <BsFillPencilFill />
                                </button>


                            </picture>


                        </div>

                        <hr
                            className={styles.contentBox.hr}
                        />

                        <div className={styles.contentBox.main}>
                            {/* Nombre de usuario */}
                            <span className={styles.contentBox.dataBox}>
                                <h2 className={styles.contentBox.titles}>
                                    Nombre de usuario
                                </h2>
                                <h4 className={styles.contentBox.data}>
                                    {currentUser.displayName === null ? 
                                    'Sin nombre de usuario' : 
                                    currentUser.displayName}
                                </h4>
                            </span>
                            {/* Email */}
                            <span className={styles.contentBox.dataBox}>
                                <h2 className={styles.contentBox.titles}>
                                        Email
                                </h2>
                                <h4 className={styles.contentBox.data}>
                                        { currentUser.email === null ?
                                          'Sin Email' :
                                          currentUser.email}
                                </h4>
                            </span>

                            <button 
                                className={styles.contentBox.button}
                                onClick={()=>setInterfaz(true)}
                            >
                                EDITAR
                            </button>
                        </div>

                    </div>
                    {/* PopUp para editar las imagenes */}
                    <div className={styles.imageProfileEdit}>
                        <ProfileImageEdit
                            setBackgroundImage={setBackgroundImage}
                            backgroundImage={backgroundImage}
                            profileImage={profileImage}
                            setProfileImage={setProfileImage}
                            isShow={editImageProfile}
                            setShow={setEditImage}
                        />
                    </div>
                </div>
            </section>
        )
    }


}
