import Navbar from "./Navbar";
import { useQuery } from "@tanstack/react-query";

const CachedCall = () => {
    const { isLoading, error, data } = useQuery(["data"], () => fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
    );

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return 'An error has occurred: ' + error.message;
    
    return (
        <div>
            <Navbar />
            <h1>Cached load</h1>
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

export default CachedCall;