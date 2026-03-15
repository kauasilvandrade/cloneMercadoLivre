import styles from "./styles.module.css"

import { Logo } from "./components/Logo"
import { SearchBar } from "./components/SearchBar"
import { Ads } from "./components/Ads"
import { UserAddress } from "./components/UserAddress"
import { NavigationMenu } from "./components/NavigationMenu"
import { UserMenu } from "./components/UserMenu"

export function Header() {
    return ( 
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                <SearchBar />
                <Ads />
                <UserAddress />
                <NavigationMenu />
                <UserMenu />
            </div>
        </header>
    )
}