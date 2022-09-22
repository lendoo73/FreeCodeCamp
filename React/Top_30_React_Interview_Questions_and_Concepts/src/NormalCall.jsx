import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const NormalCall = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
        ;
    }, []);

    if (loading) return <h1>Loading...</h1>

    return (
        <div>
            <Navbar />
            <h1>Normal load</h1>
            {data ?.map((item, i) => {
                return (
                    <div key={i}>
                        <h2>{item?.id}. {item?.title}</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default NormalCall;