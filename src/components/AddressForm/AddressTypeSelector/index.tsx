import styles from "./styles.module.css"
import { Home, BriefcaseBusiness } from "lucide-react"

export function AddressTypeSelector() {
    return (
        <div className={styles.container}>

            <div className={styles.container__checkBox}>
                <input type="radio" name="work" id="home" />
                <label htmlFor="home">
                    <Home />
                    Casa
                </label>
            </div>
            
            <div className={styles.container__checkBox}>
                <input type="radio" name="work" id="work" />
                
                <label htmlFor="work">
                    <BriefcaseBusiness />
                    Trabalho
                </label>
            </div>

        </div>
    )
}