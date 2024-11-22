import "./styles.css"
import Header from "@/components/header";
import Tab from "@/components/tab";
import Hill from "@/components/hill";
import Brazil from "@/components/brazil";
import InfoBox from "@/components/infoBox";
import Display from "@/components/display";

export default function CEP() {
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
              <Display title="CEP:" value="batata"/>
              <div style={{width: "100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"30px"}}>
                <Display title="UF:" value="batata"/>
                <Display title="CIDADE:" value="batata"/>
              </div>
              <div style={{width: "100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"30px"}}>
                <Display title="DDD:" value="batata"/>
                <Display title="BAIRRO:" value="batata"/>
              </div>
              <Display title="LOGRADOURO:" value="batata"/>
              <Display title="COMPLEMENTO:" value="batata"/>
            </div>
          </InfoBox>
      </div>
      <Brazil/>
      <Hill/>
    </div>
  );
}
