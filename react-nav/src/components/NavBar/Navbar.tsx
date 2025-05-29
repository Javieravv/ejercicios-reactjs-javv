/**Componente para crear un menú responsivo con React. */
import React from "react";
import { useEffect, useRef, useState } from "react"
import { Iconclosemenuhamburger, Iconmenuhamburger } from "./Iconsnavbar"
import RenderMenuItem from "./RenderMenuItem";
import { ItemsMenu } from "../../data/interfaces";
import './../../css/navbar.scss'

// Definimos la interfaz para los elementos del menú.
// interface MenuItem {
//     label: string;
//     href: string | undefined;
//     submenu?: MenuItem[];
// }

interface NavbarProps {
    itemsMenu: ItemsMenu[];
    logo?: string;
    onMenuItemClick?: () => void;
    claseExtra: string;
}

const Navbar: React.FC<NavbarProps> = ({
    itemsMenu,
    logo = `<h2 className="logo__title">Xavier Inc</h2>`,
    onMenuItemClick = () => { },
    claseExtra = ""
}) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    // const [isMobile, setIsMobile] = useState(false)
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean | null>(false)
    const menuRef = useRef<HTMLUListElement>(null)


    // Controlar:
    // - Resize del menu: ocultar el menú móvil
    // - Clicks fuera del menú: ocultar el menú.
    useEffect(() => {
        // Controlamos tamaño de ventana.
        const handleResize = () => {
            const mobile = window.innerWidth < 632;
            // setIsMobile(mobile)
            if (!mobile) {
                setIsMobileOpen(false)
                setActiveMenu(null)
            }
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (
                // ismobileopen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMobileOpen(false)
                setActiveMenu(null)
            }
        }

        window.addEventListener('resize', handleResize)
        document.addEventListener('mousedown', handleClickOutside)

        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])


    const handleClickHamburger = () => {
        // Controla si el menú mobile está o no abierto.
        setIsMobileOpen(!isMobileOpen)
    }

    const toggleMenuActive = (label: string) => {
        setActiveMenu(activeMenu === label ? null : label);
    }

    return (
        <section className={`sectionNav ${claseExtra}`}>
            <nav className="navbar">
                {/* Logo del menú */}
                <div className="navbar__logo">
                    <h2 className="logo__title">{logo}</h2>
                </div>

                {/* Opciones del Menú
            - Opciones principales
            - Submenú */}
                <div
                    className={`navbar__options ${isMobileOpen ? 'view-menu' : ''}`}
                >
                    <ul
                        className="navbar__items"
                        ref={menuRef}
                        id="navbar-menu">
                        {itemsMenu.map(item => (
                            <li
                                key={item.label}
                                className="item__menu"
                            >
                                <RenderMenuItem
                                    itemMenu={item}
                                    toggleMenuActive={() => toggleMenuActive(item.label)}
                                    prevMenuActive={activeMenu}
                                    setIsSubMenuOpen={() => setIsSubMenuOpen(!isSubMenuOpen)}
                                    setIsMobileOpen={() => setIsMobileOpen(false)}
                                    onMenuItemClick={onMenuItemClick} // <-- Añade esto
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Menú hamburguesa */}
                <div className="navbar__hamburger">
                    {/* <figure
                        onClick={handleClickHamburger}>
                        {!isMobileOpen ? <Iconmenuhamburger /> : <Iconclosemenuhamburger />}
                    </figure> */}
                    <button
                        aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isMobileOpen}
                        aria-controls="navbar-menu"
                        onClick={handleClickHamburger}
                        className="hamburger-btn"
                    >
                        {!isMobileOpen ? <Iconmenuhamburger /> : <Iconclosemenuhamburger />}
                    </button>
                </div>
            </nav>
        </section>
    )
}

export default Navbar