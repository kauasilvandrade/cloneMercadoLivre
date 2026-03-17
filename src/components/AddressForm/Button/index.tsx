import styles from "./styles.module.css"

type Props = React.ComponentProps<"button">

export function Button({ ...rest }: Props) {
    return (
        <div className={styles.container}>
            <button {...rest} >Salvar</button>
        </div>
    )
}