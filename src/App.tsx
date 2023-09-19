import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <div id="app">
      <Navbar id={1} username="kikito" />
      <Outlet/>
    </div>
  )
}
