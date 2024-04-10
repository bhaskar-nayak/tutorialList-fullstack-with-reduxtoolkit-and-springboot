import { fetchAllTutorials } from "../Slices/tutorials.slice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function TutorialsList(){
    const [selectedTutorial, setSelectedTutorial] = useState({});
    const tutorialsInfo = useSelector((state) => state.tutorialsInfo);
    console.log(tutorialsInfo);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchAllTutorials());
    },[]);
    //invoking onlick function
    const selectTutorial = (tutorial) =>{
        setSelectedTutorial(tutorial);
    }
    //time and date display
    const formatCreatedDate = (date) =>{
        const dateobj = new Date(date);//we are dynamically passing date
        return `${dateobj.getDate()}/${dateobj.getMonth()}/${dateobj.getFullYear}`;
    }
    return(
        <>
       <div className="container">
        <h2 className="text-center">TutorialsList page</h2>
        <div className="row">
            <div className="col-sm">
                <button className="btn btn-secondary float-end"><Link to={`/add-tutorial`} style={{color: 'white', textDecoration : 'none'}}>Add Tutorial</Link></button>
            </div>
        </div>
        <div className="row my-4">
            <div className="col-sm">
                {/* if data is loading take time to loading it show loading text */}
                {tutorialsInfo.isloading ? (
                    <p>Loading...</p>
                ):(
                    <ul className="list-group">
                       {tutorialsInfo.data.map(tutorial => (
                    <li key={tutorial.id} className={`list-group-item ${selectedTutorial.title ===tutorial.title ? 'active' : ''}`} onClick={()=> selectTutorial(tutorial)}>{tutorial.title}</li>
                     ))}
                    </ul>
                )}
            </div>
            <div className="col-sm">
                <p>Title: <span className="text-success"><b>{selectedTutorial.title}</b></span></p>
                {/* <p>Completed<span className="text-success"><b>{selectedTutorial.completed}</b></span></p> */}
                {/* <p>Completed: <span className="text-success"><b>{selectedTutorial.completed ? 'Yes' : 'No'}</b></span></p> */}
                <p>status: <span className="text-success"><b>{selectedTutorial.status}</b></span></p>
                <p>Description:<span className="text-success"><b>{selectedTutorial.description}</b></span></p>
                <p>CreatedAt:<span className="text-success"><b>{formatCreatedDate(selectedTutorial.createdAt)}</b></span></p>
                <button className="btn btn-dark me-2"><Link to={`/edit-tutorial/${selectedTutorial.id}`} style={{color:'white', textDecoration: 'none'}}>edit</Link></button>
                <button className="btn btn-danger"><Link to={`/delete-tutorial/${selectedTutorial.id}`} style={{ color: "white", textDecoration: "none" }}>Delete</Link>
                            </button>
            </div>
        </div>
       </div>
        </>
    )
}