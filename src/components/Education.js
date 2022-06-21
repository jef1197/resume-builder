import React, {Component} from "react";
import './Education.css';

class Education extends Component {

    constructor(props) {
        super(props);

        this.state = {
            educations: [],
            education: {},
            school: '',
            start: '',
            end: '',
            study: '',
            edit: true,
        }
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({
                [name]: value,
        })
    }

    onSumbit = (e) => {
        e.preventDefault();
        this.setState({
            edit: false
        })
    }

    onEdit = (e) => {
        e.preventDefault();
        this.setState({
            edit: true
        })
    }

    render() {
        const { school, start, end, study, edit } = this.state;
        let saveContent = (
            <div className="save-info">
                <h3>{school}</h3>
                <h4 className="studyTitle"> {study}</h4>
                <h4><span className="save-content">Start: </span> {start}</h4>
                <h4><span className="save-content">End:</span> {end}</h4>
            </div>
            );
        let button = <button>Save</button>;
        let editbutton =  <button disabled onClick={this.onEdit}>Edit</button>;
        let ckdisabled = false;
        if(!edit){
            button = <button disabled >Save</button>;
            editbutton =  <button  onClick={this.onEdit}>Edit</button>;
            ckdisabled = true;
        }
        return (
            <section key={this.props.id} className='editInfo'>
                <form onSubmit={this.onSumbit}>
                    <div className="form-content" >
                        <label htmlFor="school">School</label>
                        <input disabled={ckdisabled} required type='text' id="school" name='school' onChange={this.handleChange} value={school}></input>
                    </div>

                    <div className="form-content" >
                        <label htmlFor="startEdu">Start Date</label>
                        <input disabled={ckdisabled} required  type='date' id="startEdu" name='start' onChange={this.handleChange} value={start}></input>
                    </div>

                    <div className="form-content" >
                        <label htmlFor="endEdu">End Date</label>
                        <input disabled={ckdisabled} required type='date' id="endEdu" name='end' onChange={this.handleChange} value={end}></input>
                    </div>

                    <div className="form-content" >
                        <label htmlFor="study">Degree</label>
                        <input disabled={ckdisabled} required type='text' id="study" name='study' onChange={this.handleChange} value={study}></input>
                    </div>
                    <div>
                        {button}
                        {editbutton}
                        <br></br><button onClick={this.props.handleDelete} id={this.props.id} name="delEdu">Delete</button>
                    </div>
                </form>
                
                <div className="save-content">   
                        {saveContent}
                </div>
            </section>
        )
    }

}

export default Education;