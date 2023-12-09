import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Destinys() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/destinos").then(res => setData(res.data))
    }, [])



    return (
        <div>
            {data.map(destiny => (
                <div key={destiny.id}>{destiny.estado}</div>
            ))}
        </div>
    )
}
