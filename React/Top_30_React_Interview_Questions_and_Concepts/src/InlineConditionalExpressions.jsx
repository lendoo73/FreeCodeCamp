import "./App.css";
import { useEffect } from "react";

const InlineConditionalExpressions = () => {
    let age = 26;
    let name = "Ágnes";

    useEffect(() => {

        // if (age > 26) console.log("You are old");
        // else if (name === "Ágnes" && age === 26) console.log("Ágnes 26 years old");
        // else console.log("She is not Ágnes and ? years old");
        
        age > 26
            ? console.log("You are old")
            : name === "Ágnes" && age === 26 
                ? console.log("Ágnes 26 years old")
                : console.log("She is not Ágnes and ? years old");

    }, []);


    return (
        <div className="text-center">
            {
                age > 26
                    ? <h1>You are old</h1>
                    : name === "Ágnes" && age === 26 
                        ? <h1>Ágnes 26 years old</h1>
                        : <h1>She is not Ágnes and ? years old</h1>
            }
        </div>
    )
};

export default InlineConditionalExpressions;