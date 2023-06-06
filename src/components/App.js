import  React, { useEffect, useRef, useState }  from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ReactGA from 'react-ga';
import Home from "./Home";
import Error from "./Error";
import Menu from "./Menu";
import Design from "./Design";
import AboutUs from "./AboutUs";
import Tour from "./Tour";
import Contact from "./Contact";
import Dedication from "./Dedication";
import AnemoiaThemeSong from '../blob/Anemoia Theme Song Instrumentals.wav'
import AnewoodProductions from "./projects/AnewoodProductions";
import SingleProject from "./projects/SingleProject";

const TRACKING_ID = ""; // TRACKING_ID

ReactGA.initialize(TRACKING_ID);

function App() {

    const bgm = useRef()
    const [playBGM, setPlayBGM] = useState(false)

    useEffect(()=>{
        document.title = 'Anemoia Studios'

        ReactGA.pageview(window.location.pathname + window.location.search);

        bgm.current = new Audio(AnemoiaThemeSong)
        bgm.current.loop = true
    }, [])
      
    useEffect(()=>{
        if(playBGM) bgm.current.play()
        else bgm.current.pause()
    }, [playBGM])

    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home playBGM={playBGM} setPlayBGM={setPlayBGM} />} />
                <Route path="/design" element={<Design />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />}/>
                <Route path="/tour">
                    <Route path="studio" element={<Tour scene='studio' frames={9} />} />
                    <Route path="anewood" element={<Tour scene='anewood' frames={9} />} />
                    <Route path="outside" element={<Tour scene='outside' frames={7} />} />
                </Route>
                <Route path="/projects">
                    <Route path=":project" element={<AnewoodProductions />} />
                    <Route path=":project/:name" element={<SingleProject />} />
                </Route>
                <Route path="/dedication" element={<Dedication />}/>
                <Route path="*" element={<Error />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App;