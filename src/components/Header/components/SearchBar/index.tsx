import styles from "./styles.module.css"

import { Search } from 'lucide-react'

export function SearchBar() {
    return (
        <div className={styles.container}>
            <input 
            type="text" 
            id="search" 
            name="search" 
            placeholder="Buscar produtos, marcas e muito mais..."
            />
            <button>
                <Search 
                color={"var(--color-gray)"} 
                size={20} 
                />
            </button>
        </div>
    )
}