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

    const newErrors = {
      cep: data.cep.length < 8,
      address: data.address.length < 2,
      number: !noNumber && data.number === "",
      whereYouWork: data.whereYouWork === ""
    }

    setErros(newErrors)

    const hasError = Object.values(newErrors).some(Boolean)

    if (hasError) return

    localStorage.setItem("address", JSON.stringify(data))

      console.log("Salvo com sucesso!")

  }

  useEffect(() => {
    if (data.cep.length !== 9) return

    async function fetchCep() {
      try {
        const url = await fetch(`https://viacep.com.br/ws/${data.cep}/json/`)
        const response = await url.json()

        if (response.erro) {
          console.log("CEP inválido")
        }

        console.log(response)

        setData(prev => ({
          ...prev,
          address: response.logradouro || "",
          number: response.gia
        }))

      } catch (error) {
        console.log("Erro na requisição", error)
      }
    }

    fetchCep()
  }, [data.cep])

  return (
    <div>

      <Header />

      <main className={styles.container}>
        
        <h1>Adicione um endereço</h1>

        <form action="#" className={styles.container__form}>

          <InputField
            name="cep"
            label="CEP"
            value={data.cep}
            placeholder="Ex: 05410001"
            maxLength={9}
            onChange={handleChange}
            erroMessage="Insira um cep válido"
            className={errors.cep ? stylesInputField.erro : ""}
          />

          {}

          <div className={styles.container__inputs}>
            <InputField 
              name="address"
              label="Rua / Avenida"
              value={data.address}
              placeholder="Ex: Avenida los Leones, 4563"
              onChange={handleChange}
              erroMessage="O endereço deve ter pelo menos 2 caracteres."
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
            value={data.complement ?? ""}
            label="Complemento (opcional)"
            placeholder="Ex: 201"
            onChange={handleChange}
          />

          <TextareaField 
            placeholder="Ex: Entre ruas, cor de edifício, não tem campainha."
            value={data.additionalInformation}
            onChange={handleChange}
            maxLength={128}
            letters={data.additionalInformation?.length ?? 0}
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
            value={data.name}
            placeholder="Ex: João Paulo"
            size={"large"}
            onChange={handleChange}
          />

          <InputField 
            name="contact"
            label="Telefone de contato"
            value={data.contact}
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