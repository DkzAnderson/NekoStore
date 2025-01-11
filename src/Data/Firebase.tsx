import { initializeApp } from "firebase/app";
import { 
    onAuthStateChanged , 
    updateProfile,getAuth,  
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { Alert } from "../Alerts";

export const firebaseConfig = {
    apiKey: "AIzaSyARtQZDilbg2k78VGhobqLOY_ZiWl8x5e4",
    authDomain: "neko-store-10bf5.firebaseapp.com",
    projectId: "neko-store-10bf5",
    storageBucket: "neko-store-10bf5.firebasestorage.app",
    messagingSenderId: "134584652648",
    appId: "1:134584652648:web:f83446204cc80314ec7cdd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// iniciar sesion con email y password
export const SingInWithMailAndPassword = async (mail: string, password: string, setLoading: Function, to: Function) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, mail, password)
        .then(() => {
            // conexión exitosa.
            Alert(
                'success',
                'Inicio de sesión exitoso.'
            );
            setLoading(false);
            setTimeout(() => {
                to('/')
            }, 1500)

        })
        // error
        .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            setLoading(false);
            Alert(
                'error',
                errorMessage
            )
            return false
        });
}
// Cerrar sesion
export const LogOut = async (to: Function) => {
    // Cerrar sesión
    auth.signOut().then(function () {
        console.log('Usuario ha cerrado sesión');
        Alert(
            'success',
            'Sesión cerrada exitosamente.'
        )
        setTimeout(() => {
            to('/')
        }, 1500)
    }).catch(function (error) {
        console.error('Error al cerrar sesión', error);
        Alert(
            'error',
            error
        )
    });
}
// Registrar usuario nuevo
export const RegisterNewUser = async (
    email: string,password: string,
    load: Function,to: Function
)=>{
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
    
                    load(false);
                    Alert(
                        'success',
                        'Registro exitoso, porfavor revise su bandeja de entrada.'
                    );
    
                    setTimeout(()=>{
                        to('/login')
                    },2000);
                })
                .catch((error:any) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage)
                    if(errorCode === 'auth/email-already-in-use'){
                        Alert(
                            'error',
                            'El email indicado ya se encuentra en uso, porfavor use otro.'
                        )
                    } else if (errorCode === 'auth/weak-password'){
                        Alert(
                            'error',
                            'La contraseña debe tener más de 6 caracteres.'
                        )
                    }
     
                    load(false);
                });
}
/*

Enviar mensaje de verificacion

import { getAuth, sendEmailVerification } from "firebase/auth";

const auth = getAuth();
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });


*/
// Revisar el usuario actual o si hay un usuario activo
export const UserStateChange = async (setUser:Function) => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) { // Usuario ha iniciado sesión 
            setUser(currentUser);
        } else {
            // Usuario no ha iniciado sesión
            setUser(null);
        }

    })

    return () => unsubscribe();
}

export const CheckUserState = async (
    setUser: Function,
    setLoading: Function,
    setProfileImage: Function
) => {
    const Check = async () => onAuthStateChanged(auth, (user) => {
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

    Check();

}

export const CheckSession = async (setUser: Function) => {
    // Verificar sesion
    if (auth.currentUser) {
        setUser(auth.currentUser);
        console.log(auth.currentUser)
    } else {
        setUser(null);
    }
}
// Modificar / Actualizar datos de usuario
export const UpdateUserNameAndPhoto = async (
    setInterfaz: Function,
    name:string | null = null, 
    profileImage: string | null = null
) =>{
            
    if (auth.currentUser != null) {
        updateProfile(auth.currentUser, 
            profileImage === null ? 
            {
                displayName: name,
            } :
            {
                photoURL: profileImage, 
            }

        ).then(() => {
            Alert(
                'success',
                'Perfil actualizado.'
            )
            setTimeout(() => {
                setInterfaz(false);
            }, 1500)
        }).catch((error) => {
            console.log(error)
        });
    }
} 










/*


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

