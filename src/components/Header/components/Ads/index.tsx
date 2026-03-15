import styles from "./styles.module.css"

export function Ads() {
    return (
        <figure className={styles.container}>
            <img src="src/assets/ads.webp" alt="Imagem do anúncio Meli +" />
            <figcaption>Anúncio</figcaption>
        </figure>
    )
}