import styles from "./styles.module.css"
import stylesInputField from "./components/AddressForm/InputField/styles.module.css"

import React, { useState, useEffect } from "react"

import { Header } from "./components/Header"
import { InputField } from "./components/AddressForm/InputField"
import { TextareaField } from "./components/AddressForm/TextareaField"
import { AddressTypeSelector } from "./components/AddressForm/AddressTypeSelector"
import { Button } from "./components/AddressForm/Button"
import { Check } from "lucide-react"

type FormData = {
  cep: string
  address: string
  number: string
  complement?: string
  additionalInformation?: string
  whereYouWork: string
  name: string
  contact: string
}

export function App() {

  const [data, setData] = useState<FormData>({
    cep: "",
    address: "",
    number: "",
    complement: "",
    additionalInformation: "",
    whereYouWork: "",
    name: "",
    contact: ""
  })
  
  const [noNumber, setNoNumber] = useState(false)

  const [errors, setErros] = useState({
    cep: false,
    address: false,
    number: false,
    whereYouWork: false
  })


  function handleChange( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target

    setData(prev => ({
      ...prev,
      [name]: value
    }))

  }
  
  function verificationForm(event: any) {
    event.preventDefault()

    setErros({
      cep: data.cep === "",
      address: data.address === "",
      number: !noNumber && data.number === "",
      whereYouWork: data.whereYouWork === ""
    })
  }

  // useEffect(() => {
  //   async function fetchCep() {
  //     const url = await fetch("https://viacep.com.br/ws/02962000/json/");
  //     const response = await url.json()
  //     console.log(response.bairro)
  //   }

  //   fetchCep()
  // }, [])


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
            onChange={handleChange}
            erroMessage="Insira um cep válido"
            className={errors.cep ? stylesInputField.erro : ""}
          />

          <div className={styles.container__inputs}>
            <InputField 
              name="address"
              label="Rua / Avenida"
              placeholder="Ex: Avenida los Leones, 4563"
              onChange={handleChange}
              erroMessage="Informe o número de endereço"
              className={errors.address ? stylesInputField.erro : ""}
            />

            <InputField 
              name="number"
              label="Número"
              value={data.number || ""}
              placeholder="Ex: 1234"
              maxLength={5}
              checkbox={{ 
                label: "Sem número",
                onChange: (checked => {
                  setNoNumber(checked)

                  setData(prev =>({
                    ...prev,
                    number: "" 
                  }))

                  setErros(prev => ({
                    ...prev,
                    number: false
                }))
                })
              }}
              onChange={handleChange}
              erroMessage="Você deve informar o número da rua."
              className={errors.number ? stylesInputField.erro : ""}
            />
          </div>

          <InputField 
            name="complement"
            label="Complemento (opcional)"
            placeholder="Ex: 201"
            onChange={handleChange}
          />

          <TextareaField 
            placeholder="Ex: Entre ruas, cor de edifício, não tem campainha."
            onChange={handleChange}
          />

          <h4>Este é o seu trabalho ou sua casa?</h4>

          <AddressTypeSelector 
            value={data.whereYouWork}
            onChange={handleChange}
            erroMessage="Você deve selecionar uma opção."
            error={errors.whereYouWork}
          />

          <h4>Dados de contato</h4>

          <p>Se houver algum problema no envio, você receberá uma ligação neste número.</p>

          <InputField 
            name="name"
            label="Nome completo"
            placeholder="Ex: João Paulo"
            size={"large"}
            onChange={handleChange}
          />

          <InputField 
            name="contact"
            label="Telefone de contato"
            placeholder="Ex: 11 9607-1018"
            size={"large"}
            onChange={handleChange}
          />

          <Button onClick={verificationForm} />

        </form>

      </main>
    </div>
  )
}