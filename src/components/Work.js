import React, {Component} from "react";

class Work extends Component {

    constructor(props) {
        super(props);

        this.state = {
            experiances: [],
            experiance: {},
            title: '',
            start: '',
            end: '',
            desc: '',
            company: '',
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
        const { title, start, end, desc, company, edit } = this.state;
        let saveContent = (
            <div className="save-info">
                <h3>{title}</h3>
                <h3>{company}</h3>
                <h4><span className="save-content">Start: </span> {start}</h4>
                <h4><span className="save-content">End:</span> {end}</h4>
                <h4>Description: {desc}</h4>
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

                    <div className="form-content">
                        <label htmlFor="title">Job Title</label>
                        <input disabled={ckdisabled} required type='text' id="title" name='title' onChange={this.handleChange} value={title}></input>
                    </div>

                    <div className="form-content">
                        <label htmlFor="company">Company</label>
                        <input disabled={ckdisabled} required type='text' id="company" name='company' onChange={this.handleChange} value={company}></input>
                    </div>

                    <div className="form-content">
                        <label htmlFor="startWork">Start Date</label>
                        <input disabled={ckdisabled} required type='date' id="startWork" name='start' onChange={this.handleChange} value={start}></input>
                    </div>

                    <div className="form-content">
                        <label htmlFor="endWork">End Date</label>
                        <input disabled={ckdisabled} required type='date' id="endWork" name='end' onChange={this.handleChange} value={end}></input>
                    </div>

                    <div className="form-content">
                        <label htmlFor="desc">Description</label>
                        <textarea disabled={ckdisabled} required type='textarea' cols={20} rows={10} id="desc" name='desc' onChange={this.handleChange} value={desc}></textarea>
                    </div>

                    <div>
                        {button}
                        {editbutton}
                        <br></br><button onClick={this.props.handleDelete} id={this.props.id} name="delExp">Delete</button>
                    </div>
                </form>

                <div className="save-content">   
                        {saveContent}
                </div>

            </section>
        )
    }

}

export default Work;