import "./App.css";
import NormalCall from "./NormalCall";
import CachedCall from "./CachedCall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const CashingApiResponse = () => {
    let queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/normal-call" element={<NormalCall />} />
                        <Route path="/cached-call" element={<CachedCall />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </QueryClientProvider>
    );
};

export default CashingApiResponse;