import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

const Router = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route/>
            <Route/>
            <Route/>
        </Routes>
    )
}
export default Router