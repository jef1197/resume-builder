import React, {Component} from "react";
import './Info.css'

class Info extends Component {
    constructor() {
        super();

        this.state = {
            fName: "",
            lName: "",
            phone: "",
            email: "",
            edit: true
        }
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({
                [name]: value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            edit: false
        });
    }

    onEdit = (e) => {
        e.preventDefault();
        this.setState({
            edit: true
        })
    }

    render() {
        const {fName, lName ,phone, email, edit} = this.state
        let saveContent = (
                        <div className="save-info">
                            <h3 className="name">{fName} {lName}</h3>
                            <h4><span className="save-content">Tel:</span> {phone}</h4>
                            <h4><span className="save-content">Email:</span> {email}</h4>
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
                <section  className="editInfo">
                    <form onSubmit={this.onSubmit} autoComplete>
                        <div className="form-content" >
                            <label htmlFor="fName">First Name</label>
                            <input disabled={ckdisabled} required type='text' id="fName" name='fName' onChange={this.handleChange} value={fName}></input>
                        </div>

                        <div className="form-content">
                            <label htmlFor="lName">Last Name</label>
                            <input disabled={ckdisabled} required type='text' id="lName" name='lName' onChange={this.handleChange} value={lName}></input>
                        </div>

                        <div className="form-content">
                            <label htmlFor="phone">Phone</label>
                            <input disabled={ckdisabled} required type='tel' id="phone" name='phone' onChange={this.handleChange} value={phone}></input>
                        </div>

                        <div className="form-content">
                            <label htmlFor="email">Email</label>
                            <input disabled={ckdisabled} required type='email' id="email" name='email' onChange={this.handleChange}  value={email}></input>
                        </div>
                    {button}
                    {editbutton}
                    </form>

                    <div className="save-content">   
                        {saveContent}
                    </div>

                </section>
                
        )
    };
}

export default Info;