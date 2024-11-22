"use client"

import "./styles.css"
import Header from "@/components/header";
import Tab from "@/components/tab";
import Hill from "@/components/hill";
import Brazil from "@/components/brazil";
import InfoBox from "@/components/infoBox";
import InputBox from "@/components/inputBox";
import SendButton from "@/components/button";
import { buscarCepPorEndereco } from "@/utils/get_address";
import { FormEvent } from "react";
import { useAddrContext } from "@/contexts/addrContext";
import { useRouter } from "next/navigation";

export default function Endereco() {
  const {loading, setEndereco } = useAddrContext();
  const router = useRouter()
  if (loading) {
    return <p>Carregando...</p>
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const uf = formData.get("uf")?.toString() || ""
    const cidade = formData.get("cidade")?.toString() || ""
    const logradouro = formData.get("logradouro")?.toString() || ""
    const newEndereco = await buscarCepPorEndereco(uf, cidade, logradouro);
    
    if(!newEndereco) {
      alert("nenhum endereço encontrado");
      return
    }
    console.log(newEndereco[0]);
    setEndereco(newEndereco[0]);
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
              <div style={{width: "100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"30px"}}>
                <InputBox name="uf" placeholder="UF" required={true}/>
                <InputBox name="cidade" placeholder="Cidade" required={true}/>
              </div>
              <InputBox name="logradouro" placeholder="Logradouro" required={true}/>
              <SendButton text="Enviar"/>
            </form>
          </InfoBox>
      </div>
      <Brazil/>
      <Hill/>
    </div>
  );
}
