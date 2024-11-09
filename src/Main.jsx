import React from "react";
import { getData } from "./data/data";
import CardBody from "./components/CardBody";
import InputForm from "./components/InputForm";
import Header from "./components/Header";
import { createRoot } from "react-dom/client";

class Main extends React.Component{

  constructor(props) {
  
    super(props);

    this.state = { notes: getData() }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id){
    let notes = this.state.notes.filter((note)=>note.id !== id);
    this.setState({notes});
  }

  onAddNoteHandler({title,body}){
    this.setState((prevState)=>{
      return {
        notes: [
          ...prevState.notes,
          {
            id: new Date().toLocaleString(),
            title,
            body,
            archived: false,
            createdAt: new Date().toLocaleString()
  
          }
        ]
      } 
    })
  }

  render(){
    return (
      <div className="container">
        <Header/>
        <InputForm addNote={this.onAddNoteHandler}/>
        <CardBody notes={this.state.notes} onDelete={this.onDeleteHandler}/>
      </div>
    );
  }
}

let root = createRoot(document.getElementById('root'));
root.render(<Main/>)