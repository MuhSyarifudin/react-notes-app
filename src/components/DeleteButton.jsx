import React from "react";
import { BsFillTrashFill } from "react-icons/bs";


function DeleteButton({id,onDelete}){
    return (
        <button className="btn btn-danger" onClick={()=>onDelete(id)}><BsFillTrashFill />
        </button>
    )
}

export default DeleteButton;