import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { AddTutorial, resetAddedTutorialFlag } from "../Slices/tutorials.slice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AddTutorials(){
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();

    const dispatch = useDispatch();

    const tutorialsInfo = useSelector((state) => state.tutorialsInfo);

    const createTutorial =(data) =>{
        console.log(data);
        //imported addtutorial here we pass what ever data coming from form that data we need to pass in func
        dispatch(AddTutorial(data));
        //automatically data added and store in Db 
        //once data will added we need to know whether it added or not
        //we need add to interception in slice.js like isloading pending etc.
    }
    //this tutorialInfo variable we need to intercep by using useEffect
    //when ever it changing from false to true intercept that value
    //once  api call success the change to true
    useEffect(()=>{
        if (tutorialsInfo.isTutorialAdded){
            //resetaddedTutorial once alert make it true we need to call it
            dispatch(resetAddedTutorialFlag());//automatislly flsg become false next time navigate page i wont show alert message
            alert('tutorial added successfully');
            navigate('/');
        }
    },[tutorialsInfo.isTutorialAdded]);//when value changing i want to listen the changes
    //when values chnages false to true useEffect will trigger
    return(
        <div className="conatiner">
        <div className="row">
            <div className="col-md-4 mx-auto">
               <h2 className="text-center">Add Tutorial</h2>
             <form onSubmit={handleSubmit(createTutorial)} noValidate>
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
                <option value='pending'>Pending</option>
                <option value='finish'>Finish</option>
                </select>
               </div>
               <button type="submit" className="btn btn-primary mb-4">Create</button>
             </form>
            </div>
        </div>
    </div>
    )
}
export default AddTutorials;