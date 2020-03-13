import React from 'react';
//import ReduxStore from './ReduxStore'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    
    //this.state = { value: "" };
    this.state = {name: '', color: 'blue'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleColorSelection = this.handleColorSelection.bind(this);
  }
  
  handleChange(event) {
    console.log('handleChange, value is:', event.target.value);
    this.setState({ name: event.target.value });
  }

  handleColorSelection(event) {
      
    //alert("color changed: before change is" + this.state.color);
    this.setState({ color : event.target.value})
  }

  updateState(event, key) {
    this.setState({ [key] : event.target.value})

  }

  handleSubmit(event) {
    event.preventDefault();
    // alert(`Form was submitted. 
    //  Name is ${this.state.name} 
    //  and color is: ${this.state.color}`);
    console.log('dispatching action');
    
    //ReduxStore.dispatch({
    this.props.reduxDispatch({
      type: 'ADD_USER',
      name: this.state.name,
      favoriteColor: this.state.color
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input type="text" value={this.state.value} 
             onChange={(event) => this.updateState(event,'name')} />
        </label>
        <br/>
        <label>
            Favorite color:
            <select value={this.state.color} onChange={(event) => this.updateState(event,'color')}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
            </select>
        </label>
        <br/>
        <input type="submit" value="Submit Data" />
      </form>
    );
  }
}

export default NameForm;
