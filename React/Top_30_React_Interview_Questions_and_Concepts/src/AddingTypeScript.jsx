import React from "react";

// https://reactjs.org/docs/static-type-checking.html#typescript
const AddingTypeScript = () => {
    const user = {
        firstName: "Csaba",
        lastName: "Cselko",
        role: "Student"
    };

    console.log(user.name);

    return (
        <div>TypeScript</div>
    );
};

export default AddingTypeScript;