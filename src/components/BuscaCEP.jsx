import { Input } from '@chakra-ui/react';
import React from 'react';

export default function BuscarCEP(){
    return(
        <>
        <h2>Pesquise pelo CEP:</h2>
        <Input placeholder="Digite o CEP" size="md" />
        </>
    )
}