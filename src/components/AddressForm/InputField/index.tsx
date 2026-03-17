import { useState } from "react"
import styles from "./styles.module.css"

import { CircleAlert } from "lucide-react"

type Props = Omit<React.ComponentProps<"input">, "size"> & {
    label: string
    name: string
    size?: "default" | "large"
    erroMessage?: string
    checkbox?: {
        label: string
        onChange? (checkbox: boolean) : void
    }
}

export function InputField({ label, name, size ="default", checkbox, erroMessage, ...rest }: Props) {
    
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className={`${styles.container} ${rest.className || ""} ${isChecked ? styles.disabled : ""}`} >

            <label htmlFor={name}>{label}</label>

            <input
                id={name}
                name={name}
                value={rest.value || ""}
                onChange={rest.onChange}
                disabled={isChecked}
                placeholder={isChecked ? "SN" : rest.placeholder} 
                className={`
                    ${styles.container__input}
                    ${size === "large" ? styles.inputLarge : ""}
                `}
            />

            <span className={styles.container__span}>
                <CircleAlert size={20} /> {erroMessage}
            </span>

            {checkbox && (
                <label className={styles.container__checkbox}>
                    <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={(e) => {
                            const checked = e.target.checked
                            setIsChecked(checked)

                            checkbox?.onChange?.(checked)
                        }}
                    />
                    {checkbox.label}
                </label>
            )}

        </div>
    )
}