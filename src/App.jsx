import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Addstudents from "./components/Addstudents";
import FavouriteList from "./components/FavouriteList";
import StudentProvider from "./components/StudentContext";
function App(){
    
    return(<>
    <StudentProvider>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Addstudents/>}/>
        <Route path="/favourite" element={<FavouriteList/>}/>
    </Routes>
    </BrowserRouter>
    </StudentProvider>
    </>)
}
export default App