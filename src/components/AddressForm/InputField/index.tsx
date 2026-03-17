import styles from "./styles.module.css"

type Props = Omit<React.ComponentProps<"input">, "size"> & {
    label: string
    name: string
    size?: "default" | "large"
}

export function InputField({ label, name, size ="default", ...rest }: Props) {
    return (
        <div className={styles.container}>

            <label htmlFor={name}>{label}</label>

            <input
                id={name} 
                name={name} 
                {...rest}  
                className={size === "large" ? styles.inputLarge : ""}
            />

        </div>
    )
}
