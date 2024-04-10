import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { deleteTutorial, resetAddedTutorialFlag } from "../Slices/tutorials.slice";
import { useNavigate } from "react-router-dom";
function DeleteTutorial(){

    const tutorialsInfo = useSelector((state) => state.tutorialsInfo);
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (tutorialsInfo.isTutorialDeleted) {
            // Reset addedTutorial flag once the alert is shown
            dispatch(resetAddedTutorialFlag());
            alert('Deleted tutorial successfully');
            navigate('/');
        }
    }, [tutorialsInfo.isTutorialDeleted, dispatch, navigate]);

    const handleDelete = () => {
        console.log("Delete Payload:", { id: params.id });
        // Dispatch the delete action with the tutorial ID
        dispatch(deleteTutorial({ id: params.id }));
    };
    return(
        <div>
        <h2 className="text-center">Delete Tutorial</h2>
        {tutorialsInfo.isloading ? (
            <p>Deleting...</p>
        ) : (
            <>
               <div className="text-center">
               <p>Are you sure you want to delete this tutorial?</p>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
               </div>
            </>
        )}
    </div>
);
}
export default DeleteTutorial;