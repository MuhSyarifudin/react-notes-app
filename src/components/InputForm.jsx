import React from "react";

class InputForm extends React.Component {


    constructor(props){
        super(props)

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }


    onTitleChangeHandler(event){
        this.setState(()=>{
            return {
                title: event.target.value
            }
        })
    }

    onBodyChangeHandler(event){
        this.setState(()=>{
            return {
                body: event.target.value
            }
        })
    }

    onSubmitHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);        
    }

    render(){
        return (
        <div className="container" >
            <div className="col-lg-8 mx-auto">
                <div className="card-body mb-4">
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="judul"><b>Judul:</b></label>
                            <input onChange={this.onTitleChangeHandler} value={this.state.title} className="form-control" type="text" id="judul"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor=""><b>Catatan:</b></label>
                            <textarea onChange={this.onBodyChangeHandler} value={this.state.body} className="form-control" name="" id="" cols="20" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success w-100 mt-2">Add Note</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    } 

}

export default InputForm;