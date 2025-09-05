import { Link } from "react-router-dom"
import { useContext } from "react"
import { StudentsContext } from "./StudentContext"
function FavouriteList(){
    const{favourite, setfavourite} = useContext(StudentsContext)
    function handleRemove(id){
        setfavourite(prev=> prev.filter(student => student.id !== id))

    }
    
    return(<>
        <div className="heading"><Link className="heading_link" to={"/"}><p>List of Students</p></Link>
        <Link className="heading_link" to={"/favourite"}><p>Favourite Students</p></Link></div>
        <ul>
            {
                favourite.map((student,index) =>(
                <li key={student.id} className="studentlists">
                        <span>{index+1}.{student.name}</span>
                        <button onClick={()=>handleRemove(student.id)} className="remove">Remove</button>
                    </li>)
                )
            }
        </ul>
           
            
        
        </>)
}
export default FavouriteList