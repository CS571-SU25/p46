import { BrowserRouter, Route, Routes } from "react-router";
import WiscoVolleyball from "../WiscoVolleyball";
import Countdown from "./pages/Countdown";
import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";
import Roster from "./pages/Roster";
import Schedule from "./pages/Schedule";
import Tickets from "./pages/Tickets"



export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<WiscoVolleyball />}>
                <Route index element={<Landing />} />
                <Route path="countdown" element={<Countdown />}/>
                <Route path="roster" element={<Roster />}/>
                <Route path="schedule" element={<Schedule />}/>
                <Route path="tickets" element={<Tickets />}/>
                <Route path="*" element={<NoMatch />}/>
            </Route>
        </Routes>
    </BrowserRouter>
}