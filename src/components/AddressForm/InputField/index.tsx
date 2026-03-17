import styles from "./styles.module.css"

import { CircleAlert } from "lucide-react"

type Props = Omit<React.ComponentProps<"input">, "size"> & {
    label: string
    name: string
    size?: "default" | "large"
    erroMessage?: string
    checkbox?: {
        label: string
    }
}

export function InputField({ label, name, size ="default", checkbox, erroMessage, ...rest }: Props) {
    return (
        <div className={`${styles.container} ${rest.className || ""}`} >

            <label htmlFor={name}>{label}</label>

            <input
                id={name} 
                name={name} 
                {...rest}  
                className={`
                    ${size === "large" ? styles.inputLarge : ""}
                `}
            />

            <span className={styles.container__span}><CircleAlert size={20} /> {erroMessage}</span>

            {checkbox && (
                <label className={styles.container__checkbox}>
                    <input type="checkbox" />
                    {checkbox.label}
                </label>
            )}

        </div>
    )
}
