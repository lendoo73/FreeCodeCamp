import React, {Suspense} from "react";
import "./App.css";
// import ClassVsClassName from "./ClassVsClassName";
// import CssStyling from "./CssStyling";

const Lorem = React.lazy(() => import("./ClassVsClassName"));
const Home = React.lazy(() => import("./Home"));

const LazyLoading = () => {
    return (
        <div>
            <Suspense fallback={(
                <div>
                    <h1>Loading... Please Wait</h1>
                </div>
            )}>
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Home />
                <Lorem />
            </Suspense>
        </div>
    );
};

export default LazyLoading;