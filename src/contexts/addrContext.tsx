import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Endereco from "@/models/endereco";


interface AddrContextProps {
    endereco: Endereco | null;
    loading: boolean;
    setEndereco: (endereco: Endereco | null) => void;
}


const AddrContext = createContext<AddrContextProps>({
    endereco: null,
    loading: true,
    setEndereco: () => {},
});


export const AddrProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [endereco, setEndereco] = useState<Endereco | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setEndereco(null);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <AddrContext.Provider value={{ endereco, loading, setEndereco }}>
            {children}
        </AddrContext.Provider>
    );
};


export const useAddrContext = (): AddrContextProps => {
    const context = useContext(AddrContext);
    if (!context) {
        throw new Error("useAddrContext deve ser usado dentro de um AddrProvider");
    }
    return context;
};