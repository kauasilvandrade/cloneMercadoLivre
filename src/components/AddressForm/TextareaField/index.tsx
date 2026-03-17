import stylesPrincipal from "../InputField/styles.module.css"
import styles from "./styles.module.css"

type Props = React.ComponentProps<"textarea"> & {
    letters?: number
}

export function TextareaField({...rest}: Props) {
    return (
        <div className={`${stylesPrincipal.container} ${rest.className || ""}`}>

            <label htmlFor="info">Informações adicionais deste endereço (opcional)</label>

            <textarea 
                name="additionalInformation" 
                id="additionalInformation" rows={3}
                value={rest.value ?? ""}
                className={styles.container__input}
                {...rest}
                ></textarea>

            <span className={styles.container__span}>{rest.letters}/128</span>

        </div>
    )
}