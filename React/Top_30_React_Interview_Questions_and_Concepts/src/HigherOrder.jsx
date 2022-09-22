import React, {useState, useEffect} from "react";

const HigherOrder = (title, Component, endpoint) => {
    return function HOC() {
        const [data, setData] = useState([]);
        const getData = async () => {
            let data = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
                .then(response => response)
                .catch(err => err)
            ;
            setData(await data.json());
        };

        useEffect(() => {
            getData();
        }, []);

        return (
            <div>
                <h2>{title}</h2>
                <Component data={data} />
            </div>
        );
    };
};

export default HigherOrder;