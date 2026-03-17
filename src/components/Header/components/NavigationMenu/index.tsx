import styles from "./styles.module.css"

import { ChevronDown } from "lucide-react"

export function NavigationMenu() {
    return (
        <nav className={styles.container}>
            <ul className={styles.container__menuList}>
                <li className={styles.menuList__item}>
                    <a href="#">Categorias <ChevronDown size={16} /></a>
                </li>
                <li className={styles.menuList__item}>
                    <a href="#">Ofertas</a>
                </li>
                <li className={styles.menuList__item}>
                    <a href="#">Cupons</a>
                </li>
                <li className={styles.menuList__item}>
                    <a href="#">Supermercado</a>
                </li>
                <li className={styles.menuList__item}>
                    <a href="#">Moda</a>
                </li>
                <li className={styles.menuList__item}>
                    <a href="#">Mercado Play</a>
                </li>
                <li className={styles.menuList__item}>
                    <a href="#">Vender</a>
                </li>
                <li className={styles.menuList__item}>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </nav>
    )
}