import styles from "./../NavigationMenu/styles.module.css"
import stylesMain from "./styles.module.css"

import { ChevronDown, ShoppingCart, Bell } from "lucide-react"

export function UserMenu() {
    return (
        <nav className={stylesMain.container}>
            <ul className={styles.container__menuList}>
                <li className={styles.menuList__item}>
                    <img src="src/assets/user.webp" alt="" />
                    <a href="#">Kauã <ChevronDown size={16} /></a>
                </li>
                <li className={styles.menuList__item}>
                    <a href="#">Compras</a>
                </li>
                <li className={styles.menuList__item}>
                    <a href="#">Favoritos <ChevronDown size={16} /></a>
                </li>
                <li className={styles.menuList__item}>
                    <a href="#"><Bell size={19} /></a>
                </li>
                <li className={styles.menuList__item}>
                    <a href="#"><ShoppingCart size={19} /></a>
                </li>
            </ul>
        </nav>
    )
}