import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MapAndFilters from "./MapAndFilters";
import States from "./States";
import ClassComponentState from "./ClassComponentState";
// import Props from "./Props";
import InlineConditionalExpressions from "./InlineConditionalExpressions";
import EventHandling from "./EventHandling";
import Keys from "./Keys";
import Forms from "./Forms";
import DinamicInputs from "./DinamicInputs";
import CssStyling from "./CssStyling";
import {UncontrolledComponent, ControlledComponent} from "./UncontrolledVsControlledComponents";
import InnerHtml from "./InnerHtml";
import Fragments from "./Fragments";
import {StateLess, StateFul} from "./StateLessVsStateFul";
import RestApiRequest from "./RestApiRequest";
import Debouncing from "./Debouncing";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <MapAndFilters /> */}
        {/* <States /> */}
        {/* <ClassComponentState /> */}
        {/* <Props /> */}
        {/* <InlineConditionalExpressions /> */}
        {/* <EventHandling /> */}
        {/* <Keys /> */}
        {/* <Forms /> */}
        {/* <DinamicInputs /> */}
        {/* <CssStyling /> */}
        {/* <UncontrolledComponent /> */}
        {/* <ControlledComponent /> */}
        {/* <Fragments /> */}
        {/* <StateLess />
        <StateFul /> */}
        {/* <RestApiRequest /> */}
        <Debouncing />

    </React.StrictMode>
);
