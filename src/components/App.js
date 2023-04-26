import { React, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import Menu from "./Menu";

function App() {
    useEffect(()=>{
        document.title = 'Anemoia Studios New Web';
    // eslint-disable-next-line
    }, [])
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;