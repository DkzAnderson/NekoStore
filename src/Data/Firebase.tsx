import { initializeApp } from "firebase/app";
import { Alert } from "../Alerts";
import { Serie } from "./Data";

import { 
    getFirestore ,doc, 
    setDoc,updateDoc ,
    collection, addDoc,
    arrayUnion, arrayRemove,
    getDoc, getDocs
} from "firebase/firestore";

import { 
    onAuthStateChanged , 
    updateProfile,getAuth,  
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";



export const firebaseConfig = {
    apiKey: "AIzaSyARtQZDilbg2k78VGhobqLOY_ZiWl8x5e4",
    authDomain: "neko-store-10bf5.firebaseapp.com",
    projectId: "neko-store-10bf5",
    storageBucket: "neko-store-10bf5.firebasestorage.app",
    messagingSenderId: "134584652648",
    appId: "1:134584652648:web:f83446204cc80314ec7cdd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

    /* Usuario, Autenticación, Actualización de usuario y Similares.*/

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
    email: string,
    password: string,
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
//revision de usuario activo
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
//revision de sesion activa
export const CheckSession = async (setUser: Function) => {
    // Verificar sesion
    if (auth.currentUser) {
        setUser(auth.currentUser);
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

/* Agregar/actualizar datos en la db */

// convierte una 'Serie' en un objeto regular
// para que se pueda subir con 'setDoc'
const ConvertToObject = (serie: Serie): Record<string, any> => { 
    return { 
        name: serie.name, 
        seasons: serie.seasons.map(season => ({
             name: season.name, 
             episodes: season.episodes, 
             image: season.image 
            })), images: serie.images, 
            categories: serie.categories, 
            description: serie.description 
        }; 
};
//actualiza una serie
export const UploadNewSerie = async (data:Serie,collectionId:string='series')=>{

    const dataConverted = ConvertToObject(data);

    
    try { 
        const docRef = doc(db, collectionId, data.name);
         await setDoc(docRef, dataConverted)
        } catch (e) { 
        console.error("Error adding document: ", e); 
    }
    
}

// sin aparente uso por ahora
const AddDataToDb = async ()=>{
    // Crea una colección nueva y un documento
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
const CreateNewDoc = async (data:object)=>{

    // Agrega un nuevo documento en la coleccion 'cities'
    await setDoc(doc(db, "series", "LS"),data);

    // Combina los datos del documento anterior con el enviado
    //const cityRef = doc(db, 'cities', 'BJ');
    //setDoc(cityRef, { capital: true }, { merge: true });
}
const UpdateValue = async ()=>{
    const washingtonRef = doc(db, "cities", "DC");
// Actualiza sin reemplazar 
// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  capital: true
});

// Actuaiza campos de objetos anidados
// Create an initial document to update.
const frankDocRef = doc(db, "users", "frank");
await setDoc(frankDocRef, {
    name: "Frank",
    favorites: { food: "Pizza", color: "Blue", subject: "recess" },
    age: 12
});

// To update age and favorite color:
await updateDoc(frankDocRef, {
    "age": 13,
    "favorites.color": "Red"
});

// Actualizar Arrays
//const washingtonRef = doc(db, "cities", "DC");

// ArrayUnion agrega elementos a un arreglo (si no estan presentes en el)

await updateDoc(washingtonRef, {
    regions: arrayUnion("greater_virginia")
});
// ArrayRemove elimina todos los elementos de un arreglo
// Atomically remove a region from the "regions" array field.
await updateDoc(washingtonRef, {
    regions: arrayRemove("east_coast")
});

}

/* Lectura de datos */

//obtiene una unica serie mediande su 'id'=nombre de la serie
export const GetSerieFromDb = async (id: string) => {
    const docRef = doc(db, "series", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}
// obtiene todas las series de una coleccion
export const GetAllSeriesFromDb = async (collectionId:string) => {
    let data : Array<object>= [];
    //obtener datos
    const querySnapshot = await getDocs(collection(db,collectionId));
    //recorrer array de datos obtenidos
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    //devolver array con datos
    return data;
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

