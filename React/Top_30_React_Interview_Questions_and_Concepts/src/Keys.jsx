import "./App.css";

const Keys = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const details = [
        {
            id: 1,
            name: "Csaba",
            age: 49
        },
        {
            id: 2,
            name: "Andi",
            age: 45
        },
        {
            id: 3,
            name: "Andi",
            age: 45
        },
        {
            id: 4,
            name: "Robin",
            age: 18
        }
    ];

    return (
        <div>
            {/* <ul>
                {numbers.map(num => (
                    <li key={num}>{num}</li>
                ))}
            </ul> */}
            <ul>
                {details.map((detail, index) => (
                    <div key={index}>
                        <li>{detail.name}</li>
                        <li>{detail.age}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Keys;