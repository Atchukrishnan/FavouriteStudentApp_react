import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Addstudents from "./Addstudents";
import Favourite from "./Favourite"
function App(){
    return(<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Addstudents/>}/>
        <Route path="/favorite" element={ <Favourite/>}/>
    </Routes>
    </BrowserRouter>
    </>)
}
export default App