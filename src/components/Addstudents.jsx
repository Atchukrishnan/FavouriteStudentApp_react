import { Link } from "react-router-dom"
import { useContext } from "react"
import { StudentsContext } from "./StudentContext"

function Addstudents() {
    const { listStudents, favourite, setfavourite } = useContext(StudentsContext)

    function handleAdd(student) {
        setfavourite(prev => {
            if (prev.some(f => f.id === student.id)) return prev;
            return [...prev, student]
        })

    }
    return (
        <>
            <div className="heading">
                <Link className="heading_link" to={"/"}>
                    <p>List of Students</p>
                </Link>
                <Link className="heading_link" to={"/favourite"}>
                    <p>Favourite Students</p>
                </Link>
            </div>

            <ul>
                {listStudents.map(student => {
                    // check if this student is already in favourites
                    const isFavourite = favourite.some(fav => fav.id === student.id);

                    return (
                        <li key={student.id} className="studentlists">
                            <span>{student.id}. {student.name}</span>
                            <button className="add"
                                onClick={() => handleAdd(student)}
                                disabled={isFavourite}
                            >
                                Add to favourites
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Addstudents