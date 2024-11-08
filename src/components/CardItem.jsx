import React from "react";
import DeleteButton from "./DeleteButton";


function CardItem({id,title,body,createdAt,onDelete}){
    
    const showFormattedDate = (date) => {
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        }
        return new Date(date).toLocaleDateString("id-ID", options)
      }

    return (
        <div className="card mt-2 col-lg-3 col-md-4 col-sm-6 m-1 fixed-card">
            <div className="card-body">
                <h4>{title}</h4>
                <p><strong>{showFormattedDate(createdAt)}</strong></p>
                <p>{body}</p>
            </div>
            <div className="card-footer">
                <DeleteButton onDelete={onDelete} id={id}/>
            </div>
        </div>
        )
}

export default CardItem;