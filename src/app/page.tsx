import "./styles.css"
import Header from "@/components/header";
import Tab from "@/components/tab";
import Hill from "@/components/hill";
import Brazil from "@/components/brazil";
import InfoBox from "@/components/infoBox";

export default function Home() {
  return (
    <div className="page">
      <Header>
        <Tab route="/" name="Home"></Tab>
        <Tab route="/endereco" name="Endereço"></Tab>
        <Tab route="/cep" name="CEP"></Tab>
      </Header>
      <div className="content">
          <InfoBox title="Buscador de Endereço">
            <p>Atividede feita por Charlie Lages Calaça sob orientação do professosr Augusto César Oliveira para o curso de Formação Acelerade em Programação (FAP) de Front-end. Você pode utilizar essa interfaçe para buscar um endereço através de um CEP ou o inverso.</p>
          </InfoBox>
      </div>
      <Brazil/>
      <Hill/>
    </div>
  );
}
