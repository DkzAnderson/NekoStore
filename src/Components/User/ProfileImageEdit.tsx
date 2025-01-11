import { firebaseConfig } from "../FireBase/DataBase";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { ProfileImageSlider } from "./ProfileImageSlider";
import { IoClose } from "react-icons/io5";
import { Alert } from "../../Alerts";
import { getAuth, updateProfile } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



interface Props {
  isShow: boolean;
  setShow: Function;

  profileImage: string;
  backgroundImage: string;
  setProfileImage: Function;
  setBackgroundImage: Function;
}



export const ProfileImageEdit: React.FC<Props> = ({
  isShow,setShow,
  profileImage,setProfileImage,
  backgroundImage, setBackgroundImage
}) => {
  
  const [currentProfileImage,setCurrentProfileImage] = useState <string> ('');
  const [currentBgImage,setCurrentBgImage] = useState <string> ('')

      const SaveChanges = ()=>{
        setBackgroundImage(currentBgImage);
        setProfileImage(currentProfileImage);
  
          if (auth.currentUser != null) {
              updateProfile(auth.currentUser, {
                  photoURL: currentProfileImage,
              }).then(() => {
                  Alert(
                      'success',
                      'Imagen de perfil actualizada.'
                  )

                    setShow(false)
              }).catch((error) => {
                  console.log(error)
              });
          }
      }


  const styles = {
    main: `size-full relative ${isShow ? 'flex' : 'hidden'} items-center justify-center`,
    content: {
      main: 'relative w-[80%] h-auto flex flex-col bg-st-200 rounded',
      content: 'flex flex-col gap-3 items-center px-4 py-8',
      title: 'text-white font-bold mt-10',
      headerOptions:'flex gap-4 relative',
      bottomMain: 'flex flex-col w-full overflow-auto '
    
    },

    buttonBox: {
      main: 'mt-4 w-full max-w-60',
      saveBtn: 'rounded-lg bg-lime-600 size-full h-[55px] font-bold text-white'
    },


    closeBtn: 'absolute text-2xl rounded-full p-1 bg-white border top-2 right-2'
  }

  useEffect(()=>{
    setCurrentBgImage(backgroundImage);
    setCurrentProfileImage(profileImage);
  },[])

  return (
    <section className={styles.main}>
      <div className={styles.content.main}>
      <button 
          className={styles.closeBtn}
          onClick={()=>setShow(false)}
        >
            <IoClose />
        </button>
        <div className={styles.content.content}>
          <h1 className={styles.content.title}>
            EDITAR IMAGEN DE PERFIL
          </h1>

          <hr 
            className="my-2 w-[40%] h-[1px] bg-white"
          />

            <div className={styles.content.bottomMain}>
              <ProfileImageSlider
                image={profileImage}
                setProfileImage={setCurrentProfileImage}
              />
              <input 
                type="text" 
                className="hidden"
                name="profile-image"
                defaultValue={profileImage}
              />
              <input type="text"
                className="hidden"
                name="profile-background"
                defaultValue={backgroundImage} 
              />
            </div>

            <div className={styles.buttonBox.main}>
              <button 
                className={styles.buttonBox.saveBtn}
                onClick={SaveChanges}
              >
                GUARDAR CAMBIOS
              </button>
            </div>
            
        </div>
      </div>
    </section>
  )
}
