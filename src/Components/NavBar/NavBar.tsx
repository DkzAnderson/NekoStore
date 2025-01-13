import { Form, Link, useNavigate } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { TbHomeFilled } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
import '../../Scroll.css'

import { 
    LogOut,CheckSession,
    UserStateChange
 } from "../FireBase/UserFunctions";

import { useEffect, useState } from "react";
import {  User } from "firebase/auth";
import { MenuIcon } from "./MenuIcon";
import { categories } from "../../Data/DataPage";

export const NavBar = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    // muestra las categorias en el menu mobile
    const [showCategories,setShowCategories] = useState(false);

    const styles = {
        main: `fixed flex md:hidden top-[9vh] left-0 z-40 w-full h-[91vh] text-white bg-black/50 duration-300 ${menuIsOpen ? '-translate-x-[0%]' : '-translate-x-[100%]'}`,
        content: 'relative w-[280px] z-20 bg-st-100 h-full flex flex-col gap-4',

        top: {
            main: 'w-full flex p-2',
            logoBox: '',
            logo: '',

        },

        list: 'flex flex-col p-2',
        item: 'flex gap-2 items-center py-1 cursor-pointer',
        itemIcon: 'border-2 bg-st-200 rounded-full border-rd size-10 flex items-center justify-center overflow-hidden text-2xl bg-st/75',
        itemName: '',
        userPhoto: 'size-full object-cover',

        header: {// mobile
            main: 'w-full max-w-[1024px] h-[9vh] flex items-center text-white bg-st-200/75 md:bg-st-200 px-[15px]',
            menuBtn: `w-14 h-full flex items-center justify-center duration-300 `,
            userBtn: 'size-8 border-2 self-center flex items-center justify-center rounded-full overflow-hidden',
            defaultIcon: 'text-5xl text-[#ededed]',
            userImg: 'size-full object-cover',
            categoriesBtnMain: 'flex items-center gap-2 w-[90%]',
            categoriesBtnText:'flex w-[80%] justify-between',
                //flecha
            categoriesBtnIcon: `${showCategories ? '-rotate-90' : 'rotate-90'} text-2xl duration-300`,
            categoriesList: `scroll ${showCategories ? 'flex flex-col' : 'hidden'} pl-6 overflow-auto max-h-32`,
            categoriesItem: `flex py-1 w-full h-full`

        },
        headerPc:{
            main: 'hidden size-full md:flex justify-between items-center',
            
            optionsBoxMain: 'h-full flex gap-4 items-center',
            optionsBox: 'relative flex h-full group',
            title: 'z-20 w-28 bg-st-200 hover:text-rd font-bold duration-300',
            optionsList: 'absolute gap-1 left-2 -translate-y-[150%] group-hover:translate-y-0 z-0 flex flex-col top-[100%] bg-st-200 pt-0 pb-2 rounded-b overflow-hidden duration-300 ',
            items: 'p-2 bg-st-200 hover:text-rd hover:text-rd font-bold duration-300',

            searchForm: 'relative rounded-full bg-white pl-2 pr-6',
            searchInput:'w-32 focus:w-60 duration-300 outline-none py-[1px] truncate bg-transparent text-black',
            searchIcon: 'absolute text-black right-1 top-[5px]'
        }
    }

    const menuOptions = [
        {
            name: 'Inicio',
            url: '/',
            icon: <TbHomeFilled />
        },
        
        {
            name: 'Categorías',
            url: '',
            icon: <BiSolidCategory/>
        },
        {
            name: user === null ? 'Iniciar sesión' : 'Perfil de usuario',
            url: user === null ? '/login' : '/edit-profile',
            icon: user === null ? <FaCircleUser /> : <FaUserEdit />
        }

    ]

    //Verificar si se ah iniciado sesion al montar
    // el componente
    useEffect(() => {
        UserStateChange(setUser);

    }, [user,menuIsOpen]);

    //Verifica la sesion cada 10 minutos
    useEffect(() => {
        const interval = setInterval(() => {
            CheckSession(setUser);
        }, 10 * 60 * 1000); // Verifica cada 10 minutos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed z-50 top-0 left-0 flex flex-col w-full bg-st-200/75 md:bg-st-200">
            {/* Header para moviles */}
            <header className={styles.header.main}>
                {/* Mobile - tablet */}
                <div className="w-full flex md:hidden justify-between">
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
                </div>

                {/* PC */}
                <div className={styles.headerPc.main}>
                    {
                        /*
                            Agregar la interfaz del header
                            en PC
                        */
                    }
                    <span className={styles.headerPc.optionsBoxMain}>
                        <Link
                            to={'/'}
                            className="font-bold"
                        >
                            Inicio
                        </Link>

                        <div className={styles.headerPc.optionsBox}>
                            <button
                                className={styles.headerPc.title}
                            >
                                Categorias
                            </button>

                            <ul className={styles.headerPc.optionsList}>
                                {categories.map((data,i)=>(
                                    <li key={i}>
                                        <Link
                                            to={''}
                                            className={styles.headerPc.items}
                                        >
                                            {data}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </span>

                    <Form className={styles.headerPc.searchForm}>
                        <input
                            className={styles.headerPc.searchInput}
                            type="text"
                            placeholder="Buscar..."
                        />
                        <IoSearch className={styles.headerPc.searchIcon} />
                    </Form>

                </div>

            </header>
            {/* Menu dezplazable - Opciones del menu */}
            <div className={styles.main}>
                <div className={styles.content}>

                    <ul className={styles.list}>
                        {menuOptions.map((data, i) =>(
                            (
                            <li key={i}>
                                {data.name === 'Categorías' ?
                                <div>
                                            <button 
                                                className={styles.header.categoriesBtnMain}
                                                onClick={()=>setShowCategories(!showCategories)}
                                            >
                                                <span className={styles.itemIcon}>
                                                    {data.icon}
                                                </span>

                                                <span className={styles.header.categoriesBtnText}>
                                                <h2>
                                                    {data.name}
                                                </h2>
                                                    <IoMdArrowDropright className={styles.header.categoriesBtnIcon}/>
                                                </span>

                                            </button>

                                    <ul className={styles.header.categoriesList}>
                                        {categories.map((data,i)=>(
                                            <li key={i}>
                                                <Link
                                                    to={''}
                                                    className={styles.header.categoriesItem}
                                                >
                                                    {data}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                :
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
                                }
                            </li>
                            )
                        ))}


                        {user != null &&
                            <li
                                className={styles.item}
                                onClick={() => {
                                    LogOut(navigate)
                                    setMenuIsOpen(false)
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
