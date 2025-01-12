import { initializeApp } from "firebase/app";
import { Serie } from "../../Data/Data";

import { 
    getFirestore ,doc, 
    setDoc,collection,
    getDoc, getDocs
} from "firebase/firestore";

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

/* Escritura de datos */

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
/*
export const AddDataToDb = async ()=>{
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
export const CreateNewDoc = async (data:object)=>{

    // Agrega un nuevo documento en la coleccion 'cities'
    await setDoc(doc(db, "series", "LS"),data);

    // Combina los datos del documento anterior con el enviado
    //const cityRef = doc(db, 'cities', 'BJ');
    //setDoc(cityRef, { capital: true }, { merge: true });
}
export const UpdateValue = async ()=>{
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
*/
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