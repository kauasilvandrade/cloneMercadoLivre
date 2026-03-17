import stylesPrincipal from "../InputField/styles.module.css"
import styles from "./styles.module.css"

type Props = React.ComponentProps<"textarea">

export function TextareaField({...rest}: Props) {
    return (
        <div className={`${stylesPrincipal.container} ${rest.className || ""}`}>

            <label htmlFor="info">Informações adicionais deste endereço (opcional)</label>

            <textarea name="info" id="info" rows={3} className={styles.container__input} {...rest} ></textarea>

            <span className={styles.container__span}>0/128</span>

        </div>
    )
}