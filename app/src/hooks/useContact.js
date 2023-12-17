import { instance } from "@/config/configAxios";
import { useState } from "react";


export default function useContact() {
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [response, setResponse] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        instance.post("/new-contato", {
            nome: nome,
            email: email,
            telefone: telefone,
            mensagem: mensagem
        }).then(res => setResponse(res.data.message))

    }

    return { setTelefone, telefone, handleSubmit, setEmail, setMensagem, setNome, response }
}
