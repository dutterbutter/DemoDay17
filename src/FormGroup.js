import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Dropzone from 'react-dropzone';

class FormGroup extends Component {
  constructor() {
    super()
    this.state = {
      img: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  changeHandler(e) {

    this.setState({
      img: e.target.value
    })
  }
  handleSubmit(e) {

    e.preventDefault()
    this.props.addImg(this.state.img)

  }
  render() {
    return (

      <div className="col s8 addImg">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s8">
            
            <i className="material-icons prefix iconImg right-align">add_a_photo</i>
            <input onChange={this.changeHandler} className="form-control" placeholder="Add an Image URL" id="icon_prefix" type="text" />
          </div>
        </form>
      </div>
    )
  }
}

export default FormGroup
