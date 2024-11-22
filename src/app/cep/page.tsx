"use client"

import "./styles.css"
import Header from "@/components/header";
import Tab from "@/components/tab";
import Hill from "@/components/hill";
import Brazil from "@/components/brazil";
import InfoBox from "@/components/infoBox";
import InputBox from "@/components/inputBox";
import SendButton from "@/components/button";
import { buscarEndereco } from "@/utils/get_address";
import { FormEvent } from "react";
import { useAddrContext } from "@/contexts/addrContext";
import { useRouter } from "next/navigation";

export default function CEP() {
  const {loading, setEndereco } = useAddrContext();
  const router = useRouter()
  if (loading) {
    return <p>Carregando...</p>
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const cep = formData.get("cep")?.toString() || ""
    const newEndereco = await buscarEndereco(cep);
    console.log(newEndereco)
    setEndereco(newEndereco);
    router.push("/result")
  }

  return (
    <div className="page">
      <Header>
        <Tab route="/" name="Home"></Tab>
        <Tab route="/endereco" name="Endereço"></Tab>
        <Tab route="/cep" name="CEP"></Tab>
      </Header>
      <div className="content">
          <InfoBox title="Buscador de Endereço">
            <form className="form" onSubmit={handleSubmit}>
              <InputBox name="cep" placeholder="Insira o seu CEP..." required={true}/>
              <SendButton text="Enviar"/>
            </form>
          </InfoBox>
      </div>
      <Brazil/>
      <Hill/>
    </div>
  );
}
