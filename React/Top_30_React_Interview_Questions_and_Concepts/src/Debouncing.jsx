import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const pinApi = `https://api.postalpincode.in/pincode/`;

const Debouncing = () => {
    const [pin, setPin] = useState("");

    useEffect(() => {
        const debouncing = setTimeout(() => {
            axios.get(pinApi + pin)
                .then(res => console.log(res.data[0].PostOffice))
                .catch(err => console.log(err))
            ;
        }, 2000);

        return () => clearTimeout(debouncing);
    }, [pin]);

    return (
        <div>
            <input onChange={event => setPin(event.target.value)} type="text" placeholder="Enter your Pin-Code" />
        </div>
    );
};

export default Debouncing;