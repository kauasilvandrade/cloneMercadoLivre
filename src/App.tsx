import styles from "./styles.module.css"

import { Header } from "./components/Header"
import { InputField } from "./components/AddressForm/InputField"
import { TextareaField } from "./components/AddressForm/TextareaField"
import { AddressTypeSelector } from "./components/AddressForm/AddressTypeSelector"
import { Button } from "./components/AddressForm/Button"


export function App() {
  return (
    <div>

      <Header />

      <main className={styles.container}>
        
        <h1>Adicione um endereço</h1>

        <form action="#" className={styles.container__form}>

          <InputField
            name="cep"
            label="CEP"
            placeholder="Ex: 05410001"
            maxLength={8}
          />

          <div className={styles.container__inputs}>
            <InputField 
              name="address"
              label="Rua / Avenida"
              placeholder="Ex: Avenida los Leones, 4563"
            />
            <InputField 
              name="number"
              label="Número"
              placeholder="Ex: 1234"
              maxLength={5}
            />
          </div>

            <InputField 
              name="cep"
              label="Complemento (opcional)"
              placeholder="Ex: 201"
            />

            <TextareaField 
              placeholder="Ex: Entre ruas, cor de edifício, não tem campainha."
            />

            <h4>Este é o seu trabalho ou sua casa?</h4>

            <AddressTypeSelector />

            <h4>Dados de contato</h4>

            <p>Se houver algum problema no envio, você receberá uma ligação neste número.</p>

            <InputField 
              name="name"
              label="Nome completo"
              placeholder="Ex: João Paulo"
            />

            <InputField 
              name="contact"
              label="Telefone de contato"
              placeholder="Ex: 11 9607-1018"
            />

        </form>

      </main>
    </div>
  )
}