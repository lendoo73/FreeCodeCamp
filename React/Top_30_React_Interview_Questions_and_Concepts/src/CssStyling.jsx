import React from "react";
import "./App.css";

const styles = {
    internal: {
        color: "blue"
    },
    dark: {
        backgroundColor: "white",
        color: "black"
    },
    light: {
        backgroundColor: "black",
        color: "white"
    },
};

const CssStyling = () => {
    const [theme, setTheme] = React.useState(false);

    const toggleTheme = () => {
        setTheme(!theme);
    };

    return (
        <div>
            <h1 className="external">External Styling</h1>
            <h1 style={styles.internal}>Internal Styling</h1>
            <h1 style={{color: "green", backgroundColor: "black"}}>Inline Styling</h1>
            <h1 style={theme ? styles.light : styles.dark}>Dinamic style</h1>

            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
};

export default CssStyling;