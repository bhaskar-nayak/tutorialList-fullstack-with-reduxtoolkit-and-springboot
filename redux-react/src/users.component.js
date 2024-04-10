import { fetchAllusers } from "./Slices/users.slice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function Users(){
    const users = useSelector((state) => state.users);
    console.log(users);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchAllusers());
    },[])
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h2 className="text-center">User List</h2>
                </div>
            </div>
        </div>
    )
}
export default Users;