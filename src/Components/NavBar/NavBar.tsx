import { Link, useNavigate } from "react-router-dom"
import { TbHomeFilled } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";

import { Alert } from "../../Alerts";
import { useEffect, useState } from "react";
import { firebaseConfig } from "../FireBase/DataBase";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { MenuIcon } from "./MenuIcon";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);







export const NavBar: React.FC = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const styles = {
        main: `fixed flex md:hidden top-[8.6vh] left-0 z-40 w-full h-[91vh] text-white bg-black/50 duration-300 ${menuIsOpen ? '-translate-x-[0%]' : '-translate-x-[100%]'}`,
        content: 'relative w-[280px] z-20 bg-st-100 h-full flex flex-col gap-4',

        top: {
            main: 'w-full flex p-2',
            logoBox: '',
            logo: '',

        },

        list: 'flex flex-col p-2',
        item: 'flex gap-2 items-center py-1',
        itemIcon: 'border-2 rounded-full border-rd size-10 flex items-center justify-center overflow-hidden text-2xl bg-st/75',
        itemName: '',
        userPhoto: 'size-full object-cover',

        header: {
            main: 'w-full h-[9vh] flex justify-between items-center text-white bg-st-200 px-[15px]',
            menuBtn: `w-14 h-full flex items-center justify-center duration-300`,
            userBtn: 'size-10 border-2 flex items-center justify-center rounded-full overflow-hidden',
            defaultIcon: 'text-5xl text-[#ededed]',
            userImg: ' size-full object-cover'
        }
    }

    const menuOptions = [
        {
            name: 'Inicio',
            url: '/',
            icon: <TbHomeFilled />
        },
        {
            name: user === null ? 'Iniciar sesión' : 'Perfil de usuario',
            url: user === null ? '/login' : '/edit-profile',
            icon: user === null ? <FaCircleUser /> : <FaUserEdit />
        }

    ]


    const LogOut = () => {
        // Cerrar sesión
        auth.signOut().then(function () {
            console.log('Usuario ha cerrado sesión');
            Alert(
                'success',
                'Sesión cerrada exitosamente.'
            )
        }).catch(function (error) {
            console.error('Error al cerrar sesión', error);
            Alert(
                'error',
                error
            )
        });
    }

    //Verificar si se ah iniciado sesion al montar
    // el componente
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) { // Usuario ha iniciado sesión 
                setUser(currentUser);
            } else {
                // Usuario no ha iniciado sesión
                setUser(null);
            }

        })

        return () => unsubscribe();

    }, [user,menuIsOpen]);

    //Verifica la sesion cada 10 minutos
    useEffect(() => {

        const checkSession = () => {
            // Verificar sesion
            if (auth.currentUser) {
                setUser(auth.currentUser);
                console.log(auth.currentUser)
            } else {
                setUser(null);
            }
        };

        const interval = setInterval(() => {
            checkSession();
        }, 10 * 60 * 1000); // Verifica cada 10 minutos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed z-50 top-0 left-0 flex flex-col w-full overflow-hidden ">
            <header className={styles.header.main}>
                {/* 
                Terminar de modificar este boton,
                subir los estilos que estan aqui y 
                hacer el boton de usuario
                 */}
                <button className={styles.header.menuBtn}
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                >
                    <MenuIcon
                        state={menuIsOpen}
                    />
                </button>

                <span className={`${styles.header.userBtn} ${user?.photoURL !== null && ' border-rd'}`}>

                    {user === null ?
                        // si no hay sesion activa 
                        <FaCircleUser className={styles.header.defaultIcon} />
                        :
                        user.photoURL === null ?
                            // si el usuario activo no tiene foto de perfil 
                            <FaCircleUser className={styles.header.defaultIcon} />
                            :
                            // foto de perfil de usuario
                            <Link
                                to={'/edit-profile'}
                            >
                            <img
                                className={styles.header.userImg}
                                src={user.photoURL}
                                alt={user.displayName + '-photo'}
                            />
                            </Link>
                    }
                </span>

            </header>

            <div className={styles.main}>
                <div className={styles.content}>

                    <ul className={styles.list}>
                        {menuOptions.map((data, i) =>(
                            (
                            <li key={i}>
                                <Link
                                    className={styles.item}
                                    to={data.url}
                                    onClick={() => setMenuIsOpen(false)}
                                >
                                    <span className={styles.itemIcon}>
                                        {data.name === "Perfil de usuario" ?
                                            user !== null && user.photoURL !== null
                                                ?
                                                <img
                                                    className={styles.userPhoto}
                                                    src={user.photoURL}
                                                    alt="user-profile-photo"
                                                />
                                                : data.icon
                                            : data.icon
                                        }
                                    </span>

                                    <h2 className={styles.itemName}>
                                        {data.name}
                                    </h2>
                                </Link>
                            </li>
                            )
                        ))}
                        {user != null &&
                            <li
                                className={styles.item}
                                onClick={() => {
                                    LogOut()
                                    setMenuIsOpen(false)
                                    navigate('/')
                                }}
                            >
                                    <span className={styles.itemIcon}>
                                        <FaUserAltSlash/>
                                    </span>

                                    <h2 className={styles.itemName}>
                                        Cerrar sesión
                                    </h2>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
