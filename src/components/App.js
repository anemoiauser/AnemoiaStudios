import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import Menu from "./Menu";
import AboutUs from "./AboutUs";
import Tour from "./Tour";

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/tour">
                    <Route path="studio" element={<Tour scene='studio' />} />
                    <Route path="anewood" element={<Tour scene='anewood' />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;