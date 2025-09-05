import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Addstudents from "./Addstudents";
import FavouriteList from "./FavouriteList";
import StudentProvider from "./StudentContext";
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