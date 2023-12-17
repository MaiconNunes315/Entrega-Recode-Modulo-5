import { instance } from "@/config/configAxios";
import { useEffect, useState } from "react";


export default function useLodging(city) {

    const [data, setData] = useState([]);
    const [dataLodgingiCity, setDataLodgingCity] = useState([])
    const [precoDiaria, setPrecoDiaria] = useState("");
    const [endereco, setEndereco] = useState("");
    const [nome, setNome] = useState("");
    const [response, setResponse] = useState("");
    const [alert, setAlert] = useState("");
    const [cidade, setCidade] = useState("");
    const [cidadeDestino, setCidadeDestino] = useState([]);
    const [erro, setErro] = useState("")
    const [searchHospedagem, setSearchHospedagem] = useState()

    function handleSubmit(e) {
        e.preventDefault();


        if (cidade == null) {
            setErro("Selecione a cidade")
        } else {
            setErro("");

            const preco = precoDiaria.replace(/\D/g, '').replace(/([0-9]{2})$/g, ".$1")
            instance.post("/new-hospedagem", {
                nomeLocal: nome,
                cidade: cidade,
                precoDiaria: preco,
                endereco: endereco
            }).then(res => {
                setResponse(res.data.message)
                if (res.data.error) {
                    setAlert("alert-danger")

                } else {
                    setAlert("alert-success")
                    setPrecoDiaria("")
                    setNome("")
                    setEndereco("")
                }
            })
        }
    }

    function deletarHospedagem(id) {
        let confirm = prompt("Digite sim para deletar usuário, não para desistir da operação");

        confirm ? confirm.toLowerCase() : confirm;
        if (confirm === "sim" || confirm == "s") {
            instance.delete("/deletar-hospedagem/" + id).then(res => {
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

    function buscarHospedagem(id) {
        instance.get("/hospedagem/" + id).then(res => setSearchHospedagem(res.data))
    }


    useEffect(() => {
        instance.get("/hospedagens").then(res => setData(res.data))

        if (city) {
            instance.get("/hospedagem/cidade/" + city.replace(/ g/, "+")).then(res => setDataLodgingCity(res.data));
        }

        if (data) {
            setCidade(data.cidade);
            setPrecoDiaria(data.estado);
            setNome(data.pais);
            setEndereco(data.img);
        }

    }, [response, city])



    return { dataLodgingiCity }
}
