import React from "react";
import CardItem from "./CardItem";

function CardBody({notes,onDelete}){

    return (
        <div className=" row card-grid justify-content-center align-items-star fixed-container col-md-8">
            {
                notes.length === 0 ? (
                    <p className="text-center">Tidak ada catatan</p>
                ) : (
                    notes.map((note) => (
                        <CardItem key={note.id} {...note} onDelete={onDelete} />
                    )))
            }
        </div>
    );

}

export default CardBody;