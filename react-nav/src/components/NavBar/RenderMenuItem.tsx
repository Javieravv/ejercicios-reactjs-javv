/*Renderizamos una opción del menú *
Si el item tiene submenú, entonces mostrar flecha y el submenú
*/
import { FC } from "react"
import { Icondroparrow } from "./Iconsnavbar";
import { ItemsMenu } from "../../data/interfaces";

interface PropsMenuItem {
    itemMenu: ItemsMenu;
    // isMobile?: boolean;
    toggleMenuActive: () => void;
    prevMenuActive: string | null;
    setIsSubMenuOpen: () => void;
    setIsMobileOpen: () => void;
    onMenuItemClick?: () => void;
}

const RenderMenuItem: FC<PropsMenuItem> = ({
    itemMenu,
    // isMobile,
    toggleMenuActive,
    prevMenuActive,
    setIsSubMenuOpen,
    setIsMobileOpen,
    onMenuItemClick
}) => {
    // const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    if (itemMenu.submenu) {
        return (
            <>
                <div
                    className="item__submenu--title"
                    onClick={() => {
                        // setIsSubMenuOpen(!isSubMenuOpen)
                        setIsSubMenuOpen()
                        toggleMenuActive()
                        if (onMenuItemClick) onMenuItemClick()
                    }}
                >
                    <a href={itemMenu.href}>{itemMenu.label}</a>
                    {
                        itemMenu.submenu &&
                        <Icondroparrow
                            classes={`${itemMenu.label === prevMenuActive ? 'turn-arrow' : ' '}`} />
                    }

                </div>
                {/* (isSubMenuOpen && itemMenu.submenu && itemMenu.label === prevMenuActive )  */}
                {(itemMenu.label === prevMenuActive) && (
                    <div
                        className={`item__submenu--options`}
                    >
                        {itemMenu.submenu.map(submenu => (
                            <a
                                href={submenu.href}
                                key={submenu.label}
                                onClick={() => {
                                    setIsMobileOpen()
                                    toggleMenuActive()
                                }}
                                target={submenu.target ? submenu.target : '_self'}
                            >
                                {submenu.label}
                            </a>
                        ))}
                    </div>
                )}
            </>
        )
    } else {
        return (
            <>
                <div
                    className="item__submenu--title"
                    onClick={() => {
                        // setIsSubMenuOpen(!isSubMenuOpen)
                        setIsMobileOpen()
                        toggleMenuActive()
                    }}
                >
                    <a href={itemMenu.href}>{itemMenu.label}</a>
                </div>
            </>
        )
    }
}

export default RenderMenuItem