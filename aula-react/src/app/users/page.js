"use client"

import MyInput from "@/components/main"
import { useState } from "react";

export default function PageUsers() {
 const [meuState, setMeuState] = useState({nome:"" , sobrenome:"", senha:""});

    const handleChange = ({target}) =>{ 
        setMeuState({...meuState, nome:target.value  });
    }

    const handleChangeSobrenome = ({target}) =>{ 
        setMeuState({...meuState, sobrenome:target.value  });
    }

    
    const handleChangeSenha = ({target}) =>{ 
        const novoState = {
            nome: meuState.nome,
            sobrenome: meuState.sobrenome,
            senha: target.value
        }
        setMeuState(novoState);
    }

    return (<> <h1>Pages user</h1> 
    <MyInput name="Nome" type="text" value={meuState.nome} onChange={handleChange}/>
    <MyInput name="Sobrenome" type="text" value={meuState.sobrenome} onChange={handleChangeSobrenome}/>
    <MyInput name="Senha" type="password" sdisable value={meuState.senha} onChange={handleChangeSenha}/>
    <button onClick={()=> console.log(meuState)}>salvar</button>

    </>)
}