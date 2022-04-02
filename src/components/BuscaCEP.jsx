import { Button, Grid, GridItem, Input } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';




export default function BuscarCEP(){
    const [cep, setCep] = useState("");
    const [result, setResult] = useState({});

    const submitForm = (e) => {
        e.preventDefault();
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(res => {setResult(res.data)}).catch(err => {console.log(err)})
        console.log(result);
        
    }
    return(
        <Grid minH="30vh" p={3}>
        <h2 style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>Pesquise pelo CEP:</h2>
        <form onSubmit={submitForm}>
            <Grid templateColumns="5fr 1fr">
                <GridItem w="80%" h="10">
                    <Input onChange={e => setCep(e.target.value)} placeholder="Digite o CEP" size="md" />
                </GridItem>
                <GridItem w="60%" h="10">
                    <Button type="submit" colorScheme="pink" size="md">Buscar</Button>                                                                                                
                </GridItem>
            </Grid>
        </form>
        </Grid>
    )
}