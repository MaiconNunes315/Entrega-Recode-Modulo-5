import { instance } from "@/config/configAxios";
import { useEffect, useState } from "react";

export default function useUser() {
    const [data, setData] = useState([]);
    const [response, setResponse] = useState();
    const [alert, setAlert] = useState();
    // const [dataNascimento, setDataNascimento] = useState();
    // const [idade, setIdade] = useState();

    function deleteUser(id) {

        let confirm = prompt("Digite sim para deletar usuário, não para desistir da operação");

        confirm ? confirm.toLowerCase() : confirm;

        if (confirm === "sim" || confirm == "s") {
            axios.delete("http://localhost:8080/deletar-usuario/" + id).then(res => {
                if (res.data.error) {
                    setResponse("Error por favor tente novamente, caso persista entre em contato")
                    setAlert("alert-danger")
                } else {
                    setResponse(res.data.message)
                    setAlert("alert-success")
                }
            });
        }
    }


    useEffect(() => {
        instance.get("/usuarios").then(res => setData(res.data))
    }, [response])

    return { data }
}
