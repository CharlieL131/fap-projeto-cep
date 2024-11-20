import Header from "@/components/header";
import Tab from "@/components/tab";

export default function Home() {
  return (
    <div className="">
      <Header>
        <Tab route="/" name="Home"></Tab>
        <Tab route="/endereco" name="Endereço"></Tab>
        <Tab route="/cep" name="CEP"></Tab>
      </Header>
    </div>
  );
}
