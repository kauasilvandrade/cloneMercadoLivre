import styles from "./styles.module.css"
import { Home, BriefcaseBusiness, CircleAlert } from "lucide-react"

type Props = React.ComponentProps<"input"> & {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    erroMessage: string
    error?: boolean
}

export function AddressTypeSelector({ value, onChange, erroMessage, error, ...rest }: Props) {
    return (
        <div className={`${styles.container} ${error ? styles.erro : ""}`}>

            <div className={styles.container__checkBox}>
                <input 
                    type="radio"
                    name="whereYouWork"
                    value="home"
                    id="home" 
                    {...rest}
                    checked={value === "home"}
                    onChange={onChange}
                />
                <label htmlFor="home">
                    <Home />
                    Casa
                </label>
            </div>
            
            <div className={styles.container__checkBox}>
                <input 
                    type="radio"
                    name="whereYouWork"
                    value="work"
                    id="work" 
                    {...rest}
                    checked={value === "work"}
                    onChange={onChange}
                />
                
                <label htmlFor="work">
                    <BriefcaseBusiness />
                    Trabalho
                </label>
            </div>

        <span className={`
            ${styles.container__span}`}>
            <CircleAlert size={20} /> {erroMessage}
        </span>

        </div>
    )
}