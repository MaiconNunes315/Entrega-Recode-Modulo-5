import { instance } from "@/config/configAxios";
import { useEffect, useState } from "react";


export default function useDestiny(id) {
    const [destinys, setDestinys] = useState([]);
    const [destiny, setDestiny] = useState({});


    useEffect(() => {
        instance.get("/destinos").then(res => setDestinys(res.data));

        if (id) {
            instance.get("/destino/" + id).then(res => setDestiny(res.data))
        }

    }, [id])

    return { destinys, destiny }
}
