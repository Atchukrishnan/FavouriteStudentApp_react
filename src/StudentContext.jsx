import { createContext, useState } from "react";
export const StudentsContext = createContext()
function StudentProvider({children}){
    const [listStudents,setlistStudents] = useState([{id:1,name:"Atchaya"},{id:2,name:"Mathu"},{id:3,name:"Udhaya"},{id:4,name:"Latha"},{id:5,name:"Radha"},{id:6,name:"Suriya"}])
    const [favourite,setfavourite] = useState([])
    return(<StudentsContext.Provider value={{listStudents,favourite,setfavourite}}>
        {children}
    </StudentsContext.Provider>)
}
export default StudentProvider