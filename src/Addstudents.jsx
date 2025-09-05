function Addstudents(){
    var listStudents = [{id:1,name:"Atchaya"},{id:2,name:"Mathu"},{id:3,name:"Udhaya"},{id:4,name:"Latha"},{id:5,name:"Radha"},{id:6,name:"Suriya"}]
    return(
        <>
        <div className="heading"><p>List of Students</p>
        <p>Favourite Students</p></div>
        <ul>
        </ul>
            {
                listStudents.map(function(items){
                    return <li className="studentlists">
                    <span>{items.id}.{items.name}</span>
                    <button>Add to favourites</button>
            </li>
                })
            }
            
        
        </>
    )
}
export default Addstudents