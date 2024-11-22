"use client"

import "./styles.css"
import Header from "@/components/header";
import Tab from "@/components/tab";
import Hill from "@/components/hill";
import Brazil from "@/components/brazil";
import InfoBox from "@/components/infoBox";
import Display from "@/components/display";
import { useAddrContext } from "@/contexts/addrContext";

export default function Result() {
  const {endereco, loading } = useAddrContext();
  if (loading) {
    return <p>Carregando...</p>
  }
  if (!endereco) {
    return <p>nenhum endereço salvo</p>
  } else {
    return (
      <div className="page">
        <Header>
          <Tab route="/" name="Home"></Tab>
          <Tab route="/endereco" name="Endereço"></Tab>
          <Tab route="/cep" name="CEP"></Tab>
        </Header>
        <div className="content">
            <InfoBox title="Buscador de Endereço">
              <div style={{width:"100%", display: "flex", flexDirection: "column", gap:"20px"}}>
                <Display title="CEP:" value={endereco.cep}/>
                <div style={{width: "100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"30px"}}>
                  <Display title="UF:" value={endereco.uf}/>
                  <Display title="CIDADE:" value={endereco.localidade}/>
                </div>
                <div style={{width: "100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"30px"}}>
                  <Display title="DDD:" value={endereco.ddd}/>
                  <Display title="BAIRRO:" value={endereco.bairro}/>
                </div>
                <Display title="LOGRADOURO:" value={endereco.logradouro}/>
                <Display title="COMPLEMENTO:" value={endereco.complemento}/>
              </div>
            </InfoBox>
        </div>
        <Brazil/>
        <Hill/>
      </div>
    );
  }

  
}
