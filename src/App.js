import React, { Component } from "react";
import Info from './components/Info';
import Education from './components/Education';
import Work from './components/Work';
import uniqid from "uniqid";
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      eduIds: [uniqid()],
      setEduIds: [],
      expIds: [uniqid()],
      setExpIds: [],
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    if (e.target.value === "edu") {
      this.setState({
        eduIds: this.state.eduIds.concat(uniqid()),
        setEduIds: this.state.setEduIds.concat(this.state.eduIds),
      });
    } else {
      this.setState({
        expIds: this.state.expIds.concat(uniqid()),
        setExpIds: this.state.setExpIds.concat(this.state.expIds),
      });
    }
}
  handleDelete = (e) => {
    e.preventDefault();
    let id = e.target.id;
    
    if (e.target.name === "delEdu") {
      let newList = this.state.eduIds.filter((key) => key !== id);
      this.setState({
        eduIds: newList,
      })
    } else {
      let newList = this.state.expIds.filter((key) => key !== id);
      this.setState({
        expIds: newList,
      })
    }

  }

  render() {
    const {eduIds, expIds} = this.state;
    const eduComponents = eduIds.map((id) => (
      <Education  key={id} id={id} handleDelete={this.handleDelete}/>
    ));

    const expComponents = expIds.map((id) => (
      <Work  key={id} id={id} handleDelete={this.handleDelete}/>
    ));
    return (
    <div className="App">

      <h1>CV Project Builder</h1>
      
      <section className="genInfo">
        <h2>General Info</h2>
        <Info></Info>
      </section>

      <section className="eduInfo">
        <h2>School Info</h2>
        <button className="addBtn" onClick={this.handleClick} value="edu">Add</button>
        {eduComponents}
      </section>

      <section className="expInfo">
        <h2>Work Info</h2>
        <button className="addBtn" onClick={this.handleClick}>Add</button>
        {expComponents}
      </section>

    </div>
    )
  };
}

export default App;
