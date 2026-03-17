import styles from "./styles.module.css"

export function Logo() {
    return (
        <a href="https://www.mercadolivre.com.br/" target="_blank" className={styles.container}>
            <figure>
                <img src="src/assets/logo.webp" alt="Logo do Mercado Livre" />
                <figcaption>Logo Mercado Livre</figcaption>
            </figure>
        </a>
    )
} 