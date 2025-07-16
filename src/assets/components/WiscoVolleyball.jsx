import WiscoNavbar from "./nav/WiscoNavbar";
import { Outlet } from "react-router";

export default function WiscoVolleyball() {
  return (
    <>
        <WiscoNavbar />
        <Outlet />
    </>
  );
}