import { firebaseConfig } from "../FireBase/DataBase";
import { initializeApp } from "firebase/app";
import { 
    getAuth, onAuthStateChanged, 
    User , updateProfile
} from "firebase/auth";
import { useEffect, useState, FormEvent } from "react";
import { DotLoader } from 'react-spinners';
import { BsFillPencilFill } from "react-icons/bs";
import { Form, useNavigate } from "react-router-dom";
import { ProfileInput } from "./ProfileInput";
import { ProfileImageEdit } from "./ProfileImageEdit";
import { Alert } from "../../Alerts";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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


  /*

  Actualizar datos de usuario
  
  import { getAuth, updateProfile } from "firebase/auth";

  const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: "Jane Q. User", 
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});

-------------------------------
Actualizar Email de usuario

import { getAuth, updateEmail } from "firebase/auth";

const auth = getAuth();
updateEmail(auth.currentUser, "user@example.com").then(() => {
  // Email updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
  
---------------------------------
  Configurar contraseña de un usuario

  import { getAuth, updatePassword } from "firebase/auth";

const auth = getAuth();

const user = auth.currentUser;
const newPassword = getASecureRandomPassword();

updatePassword(user, newPassword).then(() => {
  // Update successful.
}).catch((error) => {
  // An error ocurred
  // ...
});

--------------------------------------

Enviar correo electronico de reestablecimiento
de contraseña

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  
  */


export const Profile = () => {

    const navigate = useNavigate();

    const [currentUser,setUser] = useState< User | null >(null)
    const [loading,setLoading] = useState< boolean >(true);
    const [editImageProfile,setEditImage] = useState(false);

    const [profileImage, setProfileImage] = useState< string >('');
    const [backgroundImage, setBackgroundImage] = useState <string>('');

    const [userNameRef,setUserNameRef] = useState<number>(0);
    //activa el boton de guardado del formulario - linea 205
    const [isFormValid, setIsFormValid] = useState <boolean> (true);
    // false = datos de usuario
    // true = editar datos de usuario
    const [interfaz,setInterfaz] = useState(false);

    const styles = {
        main : 'flex flex-col items-center justify-center w-full min-h-screen bg-st-100 z-50',
        content: 'w-full max-w-[400px] lg:max-w-[1024px] px-[36px] flex',
        
        title: 'pb-6 text-white font-bold text-2xl text-center',
    
        // interfaz de edición 
        contentBox: {
            main: 'flex relative flex-col place-items-center w-full max-w-96',
            topSide: 'w-full flex items-center justify-center',
            profileImageBox: 'relative size-[200px] rounded-full border-[3px] border-[#fff]',
            profileImage: 'size-full rounded-full object-cover',
            imageBtn: 'absolute -bottom-0 right-2 border-[4px] border-st-100 rounded-full p-2 bg-white text-2xl',
            formMain: 'flex flex-col gap-5 w-full ',
            texts: '',
            titles: '',
            
        },
        // interfaz de datos de usuario
        userData : {
            main: 'flex relative flex-col place-items-center w-full max-w-96 gap-6',
            topSide: 'relative w-full h-32 shadow-[0_0_15px_0px] shadow-transparent hover:shadow-white/50 rounded-[5px]',
            topSideImage: 'size-full object-cover rounded-[5px]',
            topBtn: 'absolute bottom-1 right-1 border-2 rounded-full p-1 bg-white',
            profileImageBox: 'absolute size-[110px] rounded-full top-[70px] border-[3px] border-[#fff]',
            profileImage: 'size-full rounded-full object-cover',
            imageBtn: 'absolute -bottom-2 -right-2 border-[4px] border-st-100 rounded-full p-2 bg-white text-lg',
            
            dataBox: 'flex flex-col w-full',
            titles: 'text-gray-500 text-sm font-bold',
            data: 'text-white text-lg',
            button: 'bg-lime-600 w-full h-[55px] rounded-lg text-white font-bold text-lg'
        },

        bottomSide: {
            main: 'w-full flex gap-5 mt-4 font-bold',
            buttonSave: 'w-full h-[55px] sm:h-[50px] text bg-lime-600 hover:bg-lime-700 text-white rounded-lg disabled:bg-gray-500',
            buttonCancel: 'w-full h-[55px] sm:h-[50px] text bg-red-500  hover:bg-red-700  text-white  rounded-lg disabled:text-gray-400'
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

        if (auth.currentUser != null) {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: profileImage,
            }).then(() => {
                Alert(
                    'success',
                    'Perfil actualizado.'
                )
                setTimeout(()=>{
                    setInterfaz(false);
                },1500)
            }).catch((error) => {
                console.log(error)
            });
        }
    }


    useEffect(()=>{
        const checkUserState = async ()=> onAuthStateChanged(auth, (user) => {
            if (user) {
                // Usuario conectado
                setUser(user);
                setLoading(false);
                user.photoURL != null && setProfileImage(user.photoURL);
            } else {
                // Usuario no conectado
                setLoading(false)
            }
        });

        checkUserState();
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
                <h1 className={styles.title}>
                    EDITAR PERFIL
                </h1>
                <div className={styles.content}>
                    {/* Contenido principal */}
                    <div className={styles.contentBox.main}>

                        <div className={styles.contentBox.profileImageBox}>

                            <img
                                className={styles.contentBox.profileImage}
                                src={profileImage}
                                alt='user-profile-image'
                            />

                            <button
                                className={styles.contentBox.imageBtn}
                                onClick={() => setEditImage(true)}
                            >
                                <BsFillPencilFill />
                            </button>
                        </div>

                        <hr
                            className="w-[10%] h-[1px] mt-20 mb-[20px] bg-[#fff]"
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
                <h1 className={styles.title}>
                    EDITAR PERFIL
                </h1>
                <div className={styles.content}>
                    {/* Contenido principal */}
                    <div className={styles.contentBox.main}>

                        <div className={styles.contentBox.topSide}>
                            <picture className={styles.contentBox.profileImageBox}>
                                <img
                                    className={styles.contentBox.profileImage}
                                    src={profileImage}
                                    alt='user-profile-image'
                                />

                                <button
                                    className={styles.contentBox.imageBtn}
                                    onClick={() => setEditImage(true)}
                                >
                                    <BsFillPencilFill />
                                </button>


                            </picture>


                        </div>

                        <hr
                            className="w-[10%] h-[1px] mt-20 mb-[20px] bg-[#fff]"
                        />

                        <div className={styles.userData.main}>
                            {/* Nombre de usuario */}
                            <span className={styles.userData.dataBox}>
                                <h2 className={styles.userData.titles}>
                                    Nombre de usuario
                                </h2>
                                <h4 className={styles.userData.data}>
                                    {currentUser.displayName === null ? 
                                    'Sin nombre de usuario' : 
                                    currentUser.displayName}
                                </h4>
                            </span>
                            {/* Email */}
                            <span className={styles.userData.dataBox}>
                                <h2 className={styles.userData.titles}>
                                        Email
                                </h2>
                                <h4 className={styles.userData.data}>
                                        { currentUser.email === null ?
                                          'Sin Email' :
                                          currentUser.email}
                                </h4>
                            </span>

                            <button 
                                className={styles.userData.button}
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
