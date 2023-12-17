import { instance } from "@/config/configAxios";
import { useEffect, useState } from "react";


export default function useSale() {

    const [trip, setTrip] = useState([]);
    const [lodging, setLodging] = useState([]);
    const [checkedLodging, setCheckedLodging] = useState(false);
    const [city, setCity] = useState("");
    const [destinys, setDestiny] = useState([])
    const [response, setResponse] = useState("")
    const [alert, setAlert] = useState("");
    const [valueTrip, setValueTrip] = useState();
    const [valueLodging, setValueLodging] = useState();
    const [sale, setSales] = useState([]);

    useEffect(() => {
        instance.get("/hospedagens").then(res => setLodging(res.data))
        instance.get("/viagem").then(res => setTrip(res.data))

        if (city != "") {
            instance.get("/hospedagem/cidade/" + city.replace(" ", "+")).then(res => setDestiny(res.data))
        }

        instance.get("/promocoes").then(res => setSales(res.data))

    }, [city])





    function handleSubmit(e) {
        e.preventDefault();
        instance.post("add-promocao", {
            tripId: valueTrip,
            lodgingId: valueLodging
        }).then(res => {
            setResponse(res.data.message)
            if (res.data.error) {
                setAlert("alert-danger")

            } else {
                setAlert("alert-success")
            }
        })
        console.log(e)
    }



    return {
        trip, lodging, handleSubmit, setCheckedLodging, checkedLodging, city, setCity, destinys, response, alert, setValueTrip, setValueLodging, sale, response, alert
    }
}
