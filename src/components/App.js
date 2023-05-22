import  React, { useEffect, useRef, useState }  from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import Menu from "./Menu";
import Design from "./Design";
import AboutUs from "./AboutUs";
import Tour from "./Tour";
import Contact from "./Contact";
import AnemoiaProjects from "./projects/AnemoiaProjects";
import AnewoodProjects from "./projects/AnewoodProjects";

import AnemoiaProjectAnimationStudio1 from "./projects/AnemoiaProjectAnimationStudio1";
import AnemoiaProjectAnimationStudio4 from "./projects/AnemoiaProjectAnimationStudio4";
import AnemoiaProjectAnimationStudio5 from "./projects/AnemoiaProjectAnimationStudio5";
import AnemoiaProjectAuditionCenter1 from "./projects/AnemoiaProjectAuditionCenter1";
import AnemoiaProjectAuditionCenter6 from "./projects/AnemoiaProjectAuditionCenter6";
import AnemoiaProjectAuditionCenter7 from "./projects/AnemoiaProjectAuditionCenter7";
import AnemoiaProjectAuditionCenter8 from "./projects/AnemoiaProjectAuditionCenter8";
import AnemoiaProjectBroadcastingStudio1 from "./projects/AnemoiaProjectBroadcastingStudio1";
import AnemoiaProjectMusicStudio1 from "./projects/AnemoiaProjectMusicStudio1";
import AnemoiaProjectMusicStudio4 from "./projects/AnemoiaProjectMusicStudio4";
import AnemoiaProjectAdultEntertainment1 from "./projects/AnemoiaProjectAdultEntertainment1";
import AnemoiaProjectAdultEntertainment4 from "./projects/AnemoiaProjectAdultEntertainment4";
import AnemoiaProjectFilmStudio2 from "./projects/AnemoiaProjectFilmStudio2";
import AnemoiaProjectFilmStudio4 from "./projects/AnemoiaProjectFilmStudio4";
import AnemoiaProjectFilmStudio5 from "./projects/AnemoiaProjectFilmStudio5";
import AnemoiaProjectFilmStudio6 from "./projects/AnemoiaProjectFilmStudio6";
import AnewoodProjectPodcast from "./projects/AnewoodProjectPodcast";
import AnewoodProjectLounge from "./projects/AnewoodProjectLounge";
import AnewoodProjectLobby from "./projects/AnewoodProjectLobby";
import AnewoodProjectCafe from "./projects/AnewoodProjectCafe";
import AnewoodProjectSuite from "./projects/AnewoodProjectSuite";
import AnewoodProjectTheatre from "./projects/AnewoodProjectTheatre";
import AnewoodProjectWarehouse from "./projects/AnewoodProjectWarehouse";
import AnemoiaThemeSong from '../blob/Anemoia Theme Song Instrumentals.wav'

function App() {

    const bgm = useRef()
    const [playBGM, setPlayBGM] = useState(false)

    useEffect(()=>{
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
                    <Route path="anemoia" element={<AnemoiaProjects scene='anemoia' />} />
                    <Route path="anewood" element={<AnewoodProjects scene='anewood' />} />
                </Route>
                <Route path="/projects/AdultEntertainment1" element={<AnemoiaProjectAdultEntertainment1 />} />
                <Route path="/projects/AdultEntertainment4" element={<AnemoiaProjectAdultEntertainment4 />} />
                <Route path="/projects/AnimationStudio1" element={<AnemoiaProjectAnimationStudio1 />} />
                <Route path="/projects/AnimationStudio4" element={<AnemoiaProjectAnimationStudio4 />} />
                <Route path="/projects/AnimationStudio5" element={<AnemoiaProjectAnimationStudio5 />} />
                <Route path="/projects/FilmStudio2" element={<AnemoiaProjectFilmStudio2 />} />
                <Route path="/projects/FilmStudio4" element={<AnemoiaProjectFilmStudio4 />} />
                <Route path="/projects/FilmStudio5" element={<AnemoiaProjectFilmStudio5 />} />
                <Route path="/projects/FilmStudio6" element={<AnemoiaProjectFilmStudio6 />} />
                <Route path="/projects/AuditionCenter1" element={<AnemoiaProjectAuditionCenter1 />} />
                <Route path="/projects/AuditionCenter6" element={<AnemoiaProjectAuditionCenter6 />} />
                <Route path="/projects/AuditionCenter7" element={<AnemoiaProjectAuditionCenter7 />} />
                <Route path="/projects/AuditionCenter8" element={<AnemoiaProjectAuditionCenter8 />} />
                <Route path="/projects/BroadcastingStudio1" element={<AnemoiaProjectBroadcastingStudio1 />} />
                <Route path="/projects/MusicStudio1" element={<AnemoiaProjectMusicStudio1 />} />
                <Route path="/projects/MusicStudio4" element={<AnemoiaProjectMusicStudio4 />} />
                <Route path="/projects/AnewoodProjectPodcast" element={<AnewoodProjectPodcast />} />
                <Route path="/projects/AnewoodProjectLounge" element={<AnewoodProjectLounge />} />
                <Route path="/projects/AnewoodProjectLobby" element={<AnewoodProjectLobby />} />
                <Route path="/projects/AnewoodProjectCafe" element={<AnewoodProjectCafe />} />
                <Route path="/projects/AnewoodProjectSuite" element={<AnewoodProjectSuite />} />
                <Route path="/projects/AnewoodProjectTheatre" element={<AnewoodProjectTheatre />} />
                <Route path="/projects/AnewoodProjectWarehouse" element={<AnewoodProjectWarehouse />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App;