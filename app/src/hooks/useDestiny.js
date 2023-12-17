import { instance } from "@/config/configAxios";
import { useEffect, useState } from "react";


export default function useDestiny(id) {
    const [destinys, setDestinys] = useState([]);
    const [destiny, setDestiny] = useState({});
    const [page, setPage] = useState(0);


    useEffect(() => {
        instance.get("/destinos?page=" + page + "&size=5").then(res => setDestinys(res.data));

        if (id) {
            instance.get("/destino/" + id).then(res => setDestiny(res.data))
        }

    }, [id, page])


    return { destinys, page, destiny, setPage }
}

