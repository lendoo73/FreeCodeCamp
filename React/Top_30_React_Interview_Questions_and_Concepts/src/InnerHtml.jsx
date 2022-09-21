import React, { useState } from "react";
import "./App.css";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const InnerHtml = () => {
    
    let data = `<p style="font-size: 60px; color: red">This is my Home</p>`;
    let data2 = `<b style="font-size: 60px; color: green">This is my Home</b>`;

    const [quill, setQuill] = React.useState("");

    const getQuillData = value => {
        setQuill(value);
    };
    console.log(quill);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: data}}></div>
            <div dangerouslySetInnerHTML={{ __html: data2}}></div>
            <p style={{fontSize: "60px", color: "blue"}}>This is my Home</p>
            <ReactQuill onChange={getQuillData} />
            <div dangerouslySetInnerHTML={{ __html: quill}}></div>
        </div>
    );
};

export default InnerHtml;