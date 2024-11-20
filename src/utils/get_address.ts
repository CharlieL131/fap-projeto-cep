import axios from 'axios';
import Endereco from '@/models/endereco';


export async function buscarEndereco(cep: string): Promise<Endereco | null> {
    try {
        const response = await axios.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
    
        if (response.data.erro) {
            console.error("CEP não encontrado!");
            return null;
        }
    
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar o endereço:", error);
        return null;
    }
}
  
export async function buscarCepPorEndereco(uf: string, cidade: string, logradouro: string): Promise<Endereco[] | null> {
    try {
        const response = await axios.get<Endereco[]>(
            `https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`
        );
    
        if (response.data.length === 0) {
            console.error("Endereço não encontrado!");
            return null;
        }
  
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        return null;
    }
  }