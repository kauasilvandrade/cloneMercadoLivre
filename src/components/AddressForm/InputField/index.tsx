import styles from "./styles.module.css"

type Props = React.ComponentProps<"input"> & {
    label: string
    name: string
}

export function InputField({ label, name, ...rest }: Props) {
    return (
        <div className={styles.container}>

            <label htmlFor={name}>{label}</label>

            <input
                id={name} 
                name={name} 
                {...rest}  
            />

        </div>
    )
}
