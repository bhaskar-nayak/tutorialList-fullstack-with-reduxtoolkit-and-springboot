import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {updateTutorial, resetAddedTutorialFlag } from "../Slices/tutorials.slice";
import { useForm } from "react-hook-form";
function EditTutorial(){

    const tutorialsInfo = useSelector((state) => state.tutorialsInfo);
    const [selectedTutorial, setSelectedTutorial] = useState({});
    const { register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() =>{
        // here we are filtering the state object 
        const filteredtutorials = tutorialsInfo.data.find(tutorial => tutorial.id === params.id);
        //if id's are matching we get the data of filtered tutorials
        if(filteredtutorials){
            setSelectedTutorial(filteredtutorials);
            console.log(selectedTutorial);
            //here we are pre-populating data we are extractting data from form in reset funcnality
            reset(filteredtutorials);
        }
    },[params]);
    const saveTutorial = (data) =>{
        dispatch(updateTutorial({...data, id: params.id}));//update func from slice.js 
    }
    useEffect(()=>{
        if (tutorialsInfo.isTutorialUpdated){
            //resetaddedTutorial once alert make it true we need to call it
            dispatch(resetAddedTutorialFlag());//automatislly flsg become false next time navigate page i wont show alert message
            alert('updated tutorial successfully');
            navigate('/')
        }
    },[tutorialsInfo.isTutorialUpdated]);//when value changing i want to listen the changes
    //when values chnages false to true useEffect will trigger
    return(
        <div className="conatiner">
        <div className="row">
            <div className="col-md-4 mx-auto">
               <h2 className="text-center">Update Tutorial</h2>
             <form onSubmit={handleSubmit(saveTutorial)} noValidate>
             <div className="mb-3">
                <lable for='title' className='form-lable'>Title</lable>
                <input type="text" className="form-control" id="title"{...register('title')}/>
               </div>
               <div className="mb-3">
                <label for='description' className="form-lable">Description</label>
                <input type="text" className="form-control" id="description"{...register('description')}/>
               </div>
               <div className="mb-3">
                <label for='status' className="form-lable">Status</label>
                <select className="form-select" aria-label="Default select example" {...register('status')}> 
                <option value='pending' defaultValue>Pending</option>
                <option value='finish'>Finish</option>
                </select>
               </div>
               <button type="submit" className="btn btn-primary mb-4">Update</button>
             </form>
            </div>
        </div>
    </div>
    )
}
export default EditTutorial;