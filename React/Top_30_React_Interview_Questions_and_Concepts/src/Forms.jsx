import { useState } from "react";
import "./App.css";

const Forms = () => {
    const [objData, setObjData] = useState({});

    const getInputs = (value, name) => {
        let data = {[name]: value};
        setObjData({...objData, ...data});
    };

    const submit = event => {
        event.preventDefault();
        console.log(objData);
    };

    return (
        <div className="form m-1">
            <form onSubmit={submit}>
                <input 
                    onChange={event => getInputs(event.target.value, event.target.name)} 
                    className="d-block mb-2" 
                    name="name"
                    type="text" 
                    placeholder="Write your Name..." 
                />
                <input 
                    onChange={event => getInputs(event.target.value, event.target.name)} 
                    className="d-block mb-2" 
                    name="age"
                    type="number" 
                    placeholder="Write your Age..." 
                />
                <input 
                    onChange={event => getInputs(event.target.value, event.target.name)} 
                    className="d-block mb-2" 
                    name="hobbies"
                    type="text" 
                    placeholder="Write your Hobbies..."
                />
                <input 
                    onChange={event => getInputs(event.target.value, event.target.name)} 
                    className="d-block mb-2" 
                    name="date"
                    type="date" 
                    placeholder="Write a Date..." 
                />
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
};

export default Forms;