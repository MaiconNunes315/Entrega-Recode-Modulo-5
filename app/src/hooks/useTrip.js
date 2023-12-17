import { instance } from "@/config/configAxios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useTrip() {
    const router = useRouter()


    const [dateSubmit, setDateSubmit] = useState({})
    const [response, setResponse] = useState("");
    const [alert, setAlert] = useState("");
    const [data, setData] = useState([])
    const [state, setState] = useState(1);
    const [dataEntrada, setDataEntrada] = useState();
    const [dataSaida, setDataSaida] = useState();
    const [observacoes, setObservacoes] = useState();
    const [userId, setUserId] = useState();
    const [preco, setPreco] = useState()
    const [precoTotal, setPrecoTotal] = useState()
    const [precoDiaria, setPrecoDiaria] = useState(0);
    const [lodging, setLodging] = useState()
    const [id, setId] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        instance.post("/new-viagem", {
            dataEntrada: new Date(dataEntrada),
            dataSaida: new Date(dataSaida),
            preco: preco,
            precoTotal: precoTotal,
            usuario: {
                id: userId
            },
            observacoes: observacoes,
            possuiHospedagem: state ? state : 0
        }).then(res => {
            setResponse(res.data.message)
            if (res.data.error) {
                setAlert("alert-danger")

            } else {
                setAlert("alert-success")
                setId(res.data.object.id)

                if (lodging) {
                    instance.post("add-promocao", {
                        tripId: res.data.object.id,
                        lodgingId: lodging.id
                    }).then(res => {
                        console.log(res.data.message)
                    })
                }

                setTimeout(() => {
                    router.push("/")
                }, 5000);
            }
        })




    }

    useEffect(() => {
        instance.get("/viagem").then(res => setData(res))

        function calculaDias() {
            const diffInMs = new Date(dataSaida) - new Date(dataEntrada)
            const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
            return diffInDays

        }
        setPreco(250.90)
        if (lodging) {
            setPrecoDiaria(lodging.precoDiaria)
        }
        if (dataEntrada && dataSaida) {
            if (calculaDias() >= 0 && precoDiaria) {
                setPrecoTotal((calculaDias() * preco) + (calculaDias() * precoDiaria))
            } else if (calculaDias() >= 0) {
                setPrecoTotal((calculaDias() * preco))
            } else {
                setPrecoTotal((preco) + (precoDiaria))
            }
        }

    }, [dataEntrada, dataSaida, response, lodging, observacoes, userId])


    return { setState, setDataEntrada, setDataSaida, setObservacoes, setUserId, setPreco, setPrecoTotal, precoTotal, state, alert, response, setLodging, handleSubmit }
}
