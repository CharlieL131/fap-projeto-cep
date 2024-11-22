import "./styles.css"
import Header from "@/components/header";
import Tab from "@/components/tab";
import Hill from "@/components/hill";
import Brazil from "@/components/brazil";
import InfoBox from "@/components/infoBox";
import InputBox from "@/components/inputBox";
import SendButton from "@/components/button";

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
            <form className="form">
              <InputBox name="cep" placeholder="Insira o seu CEP..." />
              <SendButton text="Enviar"/>
            </form>
          </InfoBox>
      </div>
      <Brazil/>
      <Hill/>
    </div>
  );
}
