import styles from "./styles.module.css"

import { MapPin } from "lucide-react"

export function UserAddress() {
    return (
        <div className={styles.container}>
            <MapPin color="#0000008e" size={24} />
            <address>
                <p>Enviar para</p> 
                <strong>São Paulo 0023123</strong>
            </address>
        </div>
    )
}