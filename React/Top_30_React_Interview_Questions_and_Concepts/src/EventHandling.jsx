import "./App.css";

const EventHandling = () => {
    
    const getInput = event => {
        console.log(event.target.name);
    };
    
    const addNums = (num1, num2) => {
        console.log(num1 + num2);
    };

    return (
        <div>
            <input onChange={getInput} placeholder="Add something..." name="input" />
            <button onClick={() => addNums(2, 3)}>Add Numbers</button>
        </div>
    );

};

export default EventHandling;